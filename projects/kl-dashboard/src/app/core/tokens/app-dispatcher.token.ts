import { InjectionToken } from "@angular/core";
import { AppDispatcher } from "../interfaces/app-dispacther";

export const APP_DISPATCHER = new InjectionToken<AppDispatcher>('APP_DISPATCHER');