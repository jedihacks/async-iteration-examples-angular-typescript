import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular';
  arrayOfObjects = [
    {
      name: 'Object1',
      type: 'Food',
    },
    {
      name: 'Object2',
      type: 'Person',
    },
    {
      name: 'Object3',
      type: 'Food',
    },
  ];

  constructor() {}
  async ngOnInit(): Promise<void> {
    await this.asyncForTest();
  }
  // async asyncTest() {
  //   const achievementFilter = this.arrayOfObjects.filter((a) => a.get);
  //   for (const achievement of achievementFilter) {
  //     console.warn('number 1');
  //     const promiseToTest = achievement.checks.map(async (check) => {
  //       console.warn('number 2');
  //       const metCheck = await this.getAchievementCheck(achievement, check);
  //       console.warn('number 3');
  //       return metCheck;
  //     });
  //     console.warn('number 4');
  //     // * This is confusing because it says .all, but it's just an array of 1 promise
  //     const metCheckData = await Promise.all(promiseToTest);
  //     console.warn('number 5');
  //   }
  // }

  // async getAchievementCheck(achievement, check) {
  //   await new Promise((resolve) => setTimeout(resolve, 2000));
  //   console.warn('timeout done');
  //   return true;
  // }

  async asyncForTest() {
    const achievementFilter = this.arrayOfObjects.filter(
      (a) => a.type === 'Food'
    );
    for (const _obj of achievementFilter) {
      console.warn('number 1');
      const tmp = await this.getObject();
      console.warn('number 2');
    }
  }

  async getObject() {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.warn('timeout done');
    return true;
  }
}
