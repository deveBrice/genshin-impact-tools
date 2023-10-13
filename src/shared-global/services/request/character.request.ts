import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConstantsCommon } from 'src/shared-global/common/constant.common';
import { AuthService } from '../auth/auth.service';
import { Character } from '../models/character.model';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class CharacterRequest {
    private readonly api_create_character_url: string = ConstantsCommon.API_CREATE_CHARACTER_URL;
    private readonly api_read_character_url: string = ConstantsCommon.API_READ_CHARACTER_URL;
    private readonly api_readone_character_url: string = ConstantsCommon.API_READONE_CHARACTER_URL;
    public readonly api_upload_picture_url: string = ConstantsCommon.API_UPLOAD_PICTURE_URL;

    constructor(private httpClient: HttpClient, private authService: AuthService) { }

    public create(character: Character) {
        const characterData = new FormData();
        characterData.set('character', JSON.stringify(character))
        return this.httpClient.post(this.api_create_character_url, characterData, {
            observe: 'body',
        })
    }

    public read() {
        return this.httpClient.get(this.api_read_character_url, {
            observe: 'body'
        })
    }

    public readone(id: string) {
        return this.httpClient.get(this.api_readone_character_url + id, {
            observe: 'body'
        })
    }

    public uploadPicture(destination: string, file: File) {
        const pictureData = new FormData();
        pictureData.set('destination', destination)
        pictureData.set('image', file)
        this.httpClient.post(this.api_upload_picture_url, pictureData).subscribe((res) => {
            console.log(res)
        })
    }
}