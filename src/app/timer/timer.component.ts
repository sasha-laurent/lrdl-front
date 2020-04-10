import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, Subscription} from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit, OnDestroy {

    secondsLeft: number;
    timerSubscription: Subscription;

    ngOnInit(): void {
        const counter = interval(1000);
        const total = 5;
        this.timerSubscription = counter.subscribe(
            (value) => {
                this.secondsLeft = total - value;
                if (this.secondsLeft === 0) {
                    this.timerSubscription.unsubscribe();
                }
            },
            (error) => {
                console.log('Uh-oh, an error occurred! : ' + error);
            },
            () => {
                console.log('Observable complete!');
            }
        );
    }

    ngOnDestroy(): void {
        this.timerSubscription.unsubscribe();
    }

}
