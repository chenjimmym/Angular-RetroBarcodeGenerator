import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  boxes = [
    {red: Math.floor(Math.random()*255), green: Math.floor(Math.random()*255), blue: Math.floor(Math.random()*255)}
    {red: Math.floor(Math.random()*255), green: Math.floor(Math.random()*255), blue: Math.floor(Math.random()*255)}
    {red: Math.floor(Math.random()*255), green: Math.floor(Math.random()*255), blue: Math.floor(Math.random()*255)}
    {red: Math.floor(Math.random()*255), green: Math.floor(Math.random()*255), blue: Math.floor(Math.random()*255)}
    {red: Math.floor(Math.random()*255), green: Math.floor(Math.random()*255), blue: Math.floor(Math.random()*255)}
    {red: Math.floor(Math.random()*255), green: Math.floor(Math.random()*255), blue: Math.floor(Math.random()*255)}
    {red: Math.floor(Math.random()*255), green: Math.floor(Math.random()*255), blue: Math.floor(Math.random()*255)}
    {red: Math.floor(Math.random()*255), green: Math.floor(Math.random()*255), blue: Math.floor(Math.random()*255)}
    {red: Math.floor(Math.random()*255), green: Math.floor(Math.random()*255), blue: Math.floor(Math.random()*255)}
    {red: Math.floor(Math.random()*255), green: Math.floor(Math.random()*255), blue: Math.floor(Math.random()*255)}
  ]
}
