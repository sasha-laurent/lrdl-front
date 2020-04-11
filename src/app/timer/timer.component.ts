import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, Subscription} from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit, OnDestroy {

    minutesLeft: number;
    secondsLeft: number;
    timerSubscription: Subscription;

    ngOnInit(): void {
        const counter = interval(1000);
        const total = 65;
        this.timerSubscription = counter.subscribe(
            (value) => {
                this.minutesLeft = Math.floor((total - value) / 60);
                this.secondsLeft = total - value - this.minutesLeft * 60;
                if (this.minutesLeft === 0 && this.secondsLeft === 0) {
                    this.timerSubscription.unsubscribe();
                }
            },
            (error) => {
                console.log('Uh-oh, an error occurred! : ' + error);
            }
        );
    }

    ngOnDestroy(): void {
        this.timerSubscription.unsubscribe();
    }

}
