import { Component, Input, ChangeDetectionStrategy} from '@angular/core';
import { character } from '@app/shared/components/interfaces/character.interface';


@Component({
    selector: 'app-character',
    template:`
            <div class="card">
            <div class="image">
                <img
                     [src]="character.image" 
                     [alt]="character.name"
                      class="card-img-top"
                >
            </div>
            <div class="card-inner">
                <div class="header">
                    <a [routerLink]="['/character-details',character.id]"> 
                        <h2>{{character.name}}</h2>
                    </a>
                    <h2 class="text-muted">{{character.status}}</h2>
                    <h4 class="text-muted">{{character.species}}</h4>
                    <h4 class="text-muted">{{character.gender}}</h4>
                    <h4 class="text-muted">Last known location:<br> {{character.location.name}}</h4>
                    <small class="text-muted">Created in the database:<br> {{character.created}}</small>
                </div>
            </div>
        </div>
        `, 
        changeDetection:ChangeDetectionStrategy.OnPush
})

export class CharacterComponent{
    @Input()character!:character;
}