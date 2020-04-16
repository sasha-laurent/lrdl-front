import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {interval, Subscription} from 'rxjs';

@Component({
    selector: 'app-timer',
    templateUrl: './timer.component.html',
    styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit, OnDestroy {

    @Input() totalMinutes = 0;
    @Input() totalSeconds = 0;
    timerClass = 'timer';

    minutesLeft: number;
    secondsLeft: number;
    timerSubscription: Subscription;
    audio = new Audio('assets/audio/ring.mp3');

    ngOnInit(): void {
    }

    ngOnDestroy(): void {
        this.timerSubscription.unsubscribe();
    }

    onStartTimer(minutes: number, seconds: number) {
        const total = minutes * 60 + seconds;
        console.log(total);

        if (this.timerSubscription) {
            this.timerSubscription.unsubscribe();
        }

        this.count(total);
    }

    count(total: number) {
        const counter = interval(1000);
        this.timerSubscription = counter.subscribe(
            (value) => {
                this.minutesLeft = Math.floor((total - value) / 60);
                this.secondsLeft = total - value - this.minutesLeft * 60;

                if (this.minutesLeft === 0 && this.secondsLeft === 0) {
                    this.audio.currentTime = 0.1;
                    this.totalMinutes = this.totalSeconds = 0;
                    this.timerClass = 'timer blinking';
                    this.playAudio();
                    this.timerSubscription.unsubscribe();
                }
            },
            (error) => {
                console.log('Uh-oh, an error occurred! : ' + error);
            }
        );
    }

    playAudio() {
        this.audio.play();
    }

    onResetTimer() {
        this.audio.pause();
        this.timerClass = 'timer';
        this.audio.currentTime = 0;
        this.minutesLeft = this.secondsLeft = 0;
        this.totalMinutes = this.totalSeconds = 0;
        this.timerSubscription.unsubscribe();
    }
}
