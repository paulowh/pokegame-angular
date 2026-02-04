import { Component } from '@angular/core';

@Component({
  selector: 'app-gym',
  imports: [],
  templateUrl: './gym.html',
  styleUrl: './gym.css',
})
export class Gym {
  // Recebe energia do pai (obrigatório)
  energy = input.required<number>();
  // Cria um evento para avisar o pai
  battleRequest = output<void>();

  isTired = computed(() => this.energy() < 10);
}

