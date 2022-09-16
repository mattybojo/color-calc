import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorBoxComponent } from './shared/color-box/color-box.component';
import { ColorSelectorComponent } from './shared/color-selector/color-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorBoxComponent,
    ColorSelectorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
