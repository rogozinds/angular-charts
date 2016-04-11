import {Component} from 'angular2/core';
import {VaadinCharts, DataSeries } from 'vaadin-charts';
import {Directive, ViewContainerRef, ElementRef} from 'angular2/core';
@Component({
    selector: 'my-app',
    template: `

    Data Binding:<input (keyup)="onKey($event)">
    Template syntax, local variable:<input #templateInput (keyup)="0">

    <vaadin-line-chart>
    <chart-title>
        Some title
    </chart-title>
    <subtitle>Some subtitle</subtitle>

    <data-series name="Data as tag">
        <data>200,214, 201, 421</data>
    </data-series>
    <data-series name="Data as attribute" data="[123,32,42,11]">
    </data-series>
    <data-series name="Data with data binding" [data]="dummyData">
    </data-series>

    <!--Need to check, doesn't work for some reason-->
    <!--<data-series name="Data Binding with template syntax" [data]="templateInput.value">-->
    <!--</data-series>-->

    </vaadin-line-chart>`,
    directives: [VaadinCharts, DataSeries]
})
export class AppComponent {
    dummyData = [55,251,360];
    el:HTMLElement;
    onKey(event:any) {
        //this.dummyData=[];
        var self=this;
        setTimeout(function(){
            var tmpData=(<HTMLInputElement>event.target).value;
            try {
                tmpData = JSON.parse("[" + tmpData + "]");
            } catch (err) {
            }

            self.dummyData = tmpData;
        }, 0);
    }
}
