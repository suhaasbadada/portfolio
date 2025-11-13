import { initializeApp } from '@angular/fire/app';
import { getAnalytics } from '@angular/fire/analytics';
import { environment } from '../environments/environment';

export const firebaseApp = initializeApp(environment.firebase);
export const analytics = getAnalytics(firebaseApp);