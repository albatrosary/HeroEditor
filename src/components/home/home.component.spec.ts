/* tslint:disable:no-unused-variable */
import { HomeComponent } from './home.component';

import { async, inject } from '@angular/core/testing';

import { TestBed } from '@angular/core/testing';

import { By }             from '@angular/platform-browser';

////////  SPECS  /////////////
describe('HomeComponent', () => {
  beforeEach(() => {
    // テスト用モジュールのセットアップ
    TestBed.configureTestingModule({
      declarations: [HomeComponent]
    });
  });

  it('component test', async(() => {
    
    // Component設定の上書き
    // TestBed.overrideComponent(HomeComponent, {set: {
    //   template: 'ほげ'
    // }});

    // コンポーネントのコンパイル
    TestBed.compileComponents().then(() => {
      // コンポーネントインスタンスの作成 
      let fixture = TestBed.createComponent(HomeComponent);
      fixture.detectChanges();
      let element = fixture.debugElement.query(By.css('h1')).nativeElement;
      expect(element.innerText).toMatch(/My First Angular 2 App/i);
    });
  }));
});