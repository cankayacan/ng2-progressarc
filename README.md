# ng2-progressarc
Progress arc component.

## Installation
You need to install the npm module:
```sh
npm install ng2-progressarc --save
```

## Usage
#### Import the `Ng2ProgressArcModule`:

```ts
import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {Ng2ProgressArcModule} from 'ng2-progressarc';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        Ng2ProgressArcModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
```

#### Anf then in your component:
```
<progress-arc
        [progress]="0.5"
        [size]="40"
        [strokeColor]="'#3080E8'"
        [backgroundColor]="'#eeeeee'">
</progress-arc>
```
