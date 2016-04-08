import {Component} from 'angular2/core';
import {VaadinCharts, DataSeries } from 'vaadin-charts';
import {Directive, ViewContainerRef, ElementRef} from 'angular2/core';
@Component({
    selector: 'my-app',
    template: `<div>Some div</div>
    <vaadin-line-chart>
    <chart-title>
        Some title
    </chart-title>
    <subtitle>Some subtitle</subtitle>
    <data-series>
        <data>123,4214, 241, 421</data>
    </data-series>
    <!--<data-series name="Girls" data="123,3232,42">-->
    <!--</data-series>-->
    </vaadin-line-chart>`,
    directives: [VaadinCharts, DataSeries]
})
export class AppComponent {
    dummyData = [123,421,42];
    el:HTMLElement;
    onKey(event:any) {
        //     this.dummyData=(<HTMLInputElement>event.target).value;
        this.dummyData=[];
        var self=this;
        setTimeout(function(){
            self.dummyData=(<HTMLInputElement>event.target).value;
        }, 0);
    }
}
