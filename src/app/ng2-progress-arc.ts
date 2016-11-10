import {Component, Input, OnInit} from '@angular/core';

@Component({
	selector: 'progress-arc',
	template: `
		<svg [attr.width]="size" [attr.height]="size">
			<circle class="ngpa-background" fill="none"
					*ngIf="backgroundColor"
					[attr.cx]="size/2"
					[attr.cy]="size/2"
					[attr.r]="radius"
					[attr.stroke]="backgroundColor"
					[attr.stroke-width]="strokeWidthCapped"
			/>
			<circle class="ngpa-progress" fill="none"
					[attr.cx]="size/2"
					[attr.cy]="size/2"
					[attr.r]="radius"
					[attr.stroke]="strokeColor"
					[attr.stroke-width]="strokeWidthCapped"
					[attr.stroke-dasharray]="circumference"
					[attr.stroke-dashoffset]="(1 - progress) * circumference"
					[attr.transform]="transform()"
			/>
		</svg>
	`
})

export class Ng2ProgressArc implements OnInit {
	@Input() size:number = 30;
	@Input() strokeWidth:number = 2.5;
	@Input() strokeColor:string = 'black';
	@Input() backgroundColor:string = null;
	@Input() progress:number = 0;  // meaningful range: <0.0, 1.0>

	private strokeWidthCapped:number;
	private radius:number;
	private circumference:number;
	private offset:number;

	constructor() {
		this.offset = /firefox/i.test(navigator.userAgent) ? -89.9 : -90;
	}

	ngOnInit() {
		this.updateRadius();
	}

	private transform():string {
		return 'rotate(' + this.offset + ', ' + this.size / 2 + ', ' + this.size / 2 + ') ';
	}

	private updateRadius() {
		this.strokeWidthCapped = Math.min(this.strokeWidth, this.size / 2 - 1);
		this.radius = Math.max((this.size - this.strokeWidthCapped) / 2 - 1, 0);
		this.circumference = 2 * Math.PI * this.radius;
	};
}
