
import {Injectable} from '@angular/core'
import { Title } from '@angular/platform-browser'
import { stringify } from 'querystring'

declare let toaster:any
@Injectable()
export class ToastrService
{
    success(message:string, title?:string)
    {
        toaster.success(message,title)
    }

    info(message:string, title?:string)
    {
        toaster.info(message,title)
    }

    warning(message:string, title?:string)
    {
        toaster.warning(message,title)
    }

    error(message:string, title?:string)
    {
        toaster.error(message,title)
    }
}