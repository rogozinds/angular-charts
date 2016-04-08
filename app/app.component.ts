import {Component} from 'angular2/core';
import { VaadinCharts, DataSeries } from 'vaadin-charts';
@Component({
    selector: 'my-app',
    template: `<div>Some div</div>
    <vaadin-area-chart>
    <chart-title>
        Some title
    </chart-title>
    </vaadin-area-chart>`,
    directives: [VaadinCharts, DataSeries]
})
export class AppComponent { }
