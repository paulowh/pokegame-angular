import { Component, signal, computed, effect } from '@angular/core';
import { Header } from "./components/header/header";
import { Gym } from './components/gym/gym';
import { Center } from "./components/center/center";

@Component({
  selector: 'app-root',
  imports: [Header, Center, Gym],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  // Defina os estados iniciais aqui (ex: money = signal(50))
  money = signal(50);
  energy = signal(100);
  
  // Crie um computed signal para saber se está cansado ou vida cheia
  isTired = computed(() => this.energy() < 10);
  isFullLife = computed(() => this.energy() === 100);

  // Use um effect para logar no console quando o dinheiro mudar
  logEffect = effect(() => {
    console.log('Dinheiro atual:', this.money());
  });
  
  battle() {
    // TODO: Só batalha se tiver energia. Custa 10 de energia, ganha 20 money.
    this.energy.update(value => value - 10);
    this.money.update(value => value + 20);
  }

  heal() {
    // TODO: Recupera energia para 100.
    this.energy.set(100);
  }
}