import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
export interface ISampleReportInfo {
    defaultPage: string;
    embedToken: {
        expiration: Date;
        token: string;
        tokenId: string;
    };
    embedUrl: string;
    id: string;
    minutesToExpiration: number;
    mobileDefaultPage: string;
    type: string;
}
@Injectable()
export class PowerBiService {
    constructor(private _httpClient: HttpClient) {
    }

    public getReportInfo(): Observable<ISampleReportInfo> {
        return this._httpClient.get<ISampleReportInfo>(`https://powerbiplaygroundbe.azurewebsites.net/api/Reports/SampleReport`);
    }
}
