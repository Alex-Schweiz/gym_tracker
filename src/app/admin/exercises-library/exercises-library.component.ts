import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercises-library',
  templateUrl: './exercises-library.component.html',
  styleUrls: ['./exercises-library.component.css']
})
export class ExercisesLibraryComponent implements OnInit {

  public categories: any[] = [
    {
      categoryName: 'Руки',
      categoryItems: [
        {
          name: 'Бицепсы',
          subcategory: 'biceps',
        }, {
          name: 'Трицепсы',
          subcategory: 'triceps',
        }, {
          name: 'Предплечия',
          subcategory: 'forearm',
        }],
    },
    {
      categoryName: 'Спина и шея',
      categoryItems: [
        {
          name: 'Поясница',
          subcategory: 'biceps',
        }, {
          name: 'Широчайшие и верх спины',
          subcategory: 'triceps',
        }, {
          name: 'Трапеции',
          subcategory: 'forearm',
        }, {
          name: 'Шея',
          subcategory: 'forearm',
        }],
    },
    {
      categoryName: 'Ягодицы',
      categoryItems: [
        {
          name: 'Ягодицы',
          subcategory: 'biceps',
        }],
    },
    {
      categoryName: 'Пресс и косые',
      categoryItems: [
        {
          name: 'Пресс',
          subcategory: 'biceps',
        }, {
          name: 'Косые',
          subcategory: 'biceps',
        }],
    },
    {
      categoryName: 'Плечи',
      categoryItems: [
        {
          name: 'Передняя дельта',
          subcategory: 'biceps',
        }, {
          name: 'Средняя дельта',
          subcategory: 'biceps',
        }, {
          name: 'Задняя дельта',
          subcategory: 'biceps',
        }],
    },
    {
      categoryName: 'Грудь',
      categoryItems: [
        {
          name: 'Грудь',
          subcategory: 'biceps',
        }],
    },
    {
      categoryName: 'Бедра',
      categoryItems: [
        {
          name: 'Передняя поверхность',
          subcategory: 'biceps',
        }, {
          name: 'Задняя поверхность',
          subcategory: 'biceps',
        }, {
          name: 'Внутреняя поверхность',
          subcategory: 'biceps',
        }, {
          name: 'Наружная поверхность',
          subcategory: 'biceps',
        }],
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
