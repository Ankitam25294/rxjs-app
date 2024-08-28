import { Routes } from '@angular/router';
import { FromComponent } from './components/from/from.component';
import { CreateCustomObservableComponent } from './components/create-custom-observable/create-custom-observable.component';
import { FuncVsObsComponent } from './components/func-vs-obs/func-vs-obs.component';
import { CancelObservableComponent } from './components/cancel-observable/cancel-observable.component';
import { OperatorBasicsComponent } from './components/operator-basics/operator-basics.component';
import { BufferComponent } from './components/buffer-operator/buffer/buffer.component';
import { BufferCountComponent } from './components/buffer-operator/buffer-count/buffer-count.component';
import { BufferTimeComponent } from './components/buffer-operator/buffer-time/buffer-time.component';
import { BufferToggleComponent } from './components/buffer-operator/buffer-toggle/buffer-toggle.component';
import { BufferWhenComponent } from './components/buffer-operator/buffer-when/buffer-when.component';
import { TakeComponent } from './components/take-operator/take/take.component';
import { TakeOperatorComponent } from './components/take-operator/take-operator.component';
import { TakeLastComponent } from './components/take-operator/take-last/take-last.component';
import { TakeUntilComponent } from './components/take-operator/take-until/take-until.component';
import { TakeWhileComponent } from './components/take-operator/take-while/take-while.component';
import { BufferOperatorComponent } from './components/buffer-operator/buffer-operator.component';
import { SkipOperatorComponent } from './components/skip-operator/skip-operator.component';
import { SkipComponent } from './components/skip-operator/skip/skip.component';
import { SkipLastComponent } from './components/skip-operator/skip-last/skip-last.component';
import { SkipUntilComponent } from './components/skip-operator/skip-until/skip-until.component';
import { SkipWhileComponent } from './components/skip-operator/skip-while/skip-while.component';
import { DistinctOperatorComponent } from './components/distinct-operator/distinct-operator.component';
import { DistinctComponent } from './components/distinct-operator/distinct/distinct.component';
import { DistinctUntilChangedComponent } from './components/distinct-operator/distinct-until-changed/distinct-until-changed.component';
import { DistinctUntilKeyChangedComponent } from './components/distinct-operator/distinct-until-key-changed/distinct-until-key-changed.component';
import { FilterOperatorComponent } from './components/filter-operator/filter-operator.component';
import { SampleOperatorComponent } from './components/sample-operator/sample-operator.component';
import { SampletimeOperatorComponent } from './components/sampletime-operator/sampletime-operator.component';
import { AudittimeOperatorComponent } from './components/audittime-operator/audittime-operator.component';
import { AuditOperatorComponent } from './components/audit-operator/audit-operator.component';
import { ThrottleComponent } from './components/throttle/throttle.component';
import { ThrottleTimeComponent } from './components/throttle-time/throttle-time.component';

export const routes: Routes = [
    {
        path: 'from',
        component: FromComponent
    },
    {
        path: 'custom-observable',
        component: CreateCustomObservableComponent
    },
    {
        path: 'function-vs-observable',
        component: FuncVsObsComponent
    },
    {
        path: 'cancel-observable',
        component: CancelObservableComponent
    },
    {
        path: 'operator-basics',
        component: OperatorBasicsComponent
    },
    {
        path: 'buffer-operator',
        component: BufferOperatorComponent,
        children: [
            {
                path: 'buffer',
                component: BufferComponent
            },
            {
                path: 'buffer-count',
                component: BufferCountComponent
            },
            {
                path: 'buffer-time',
                component: BufferTimeComponent
            },
            {
                path: 'buffer-toggle',
                component: BufferToggleComponent
            },
            {
                path: 'buffer-when',
                component: BufferWhenComponent
            },
        ]
    },
    {
        path: 'take-operator',
        component: TakeOperatorComponent,
        children: [
            {
                path:'take',
                component: TakeComponent
            },
            {
                path:'take-last',
                component: TakeLastComponent
            },
            {
                path:'take-until',
                component: TakeUntilComponent
            },
            {
                path:'take-while',
                component: TakeWhileComponent
            }
        ]
    },
    {
        path: 'skip-operator',
        component: SkipOperatorComponent,
        children: [
            {
                path:'skip',
                component: SkipComponent
            },
            {
                path:'skip-last',
                component: SkipLastComponent
            },
            {
                path:'skip-until',
                component: SkipUntilComponent
            },
            {
                path:'skip-while',
                component: SkipWhileComponent
            },
        ]
    },
    {
        path: 'distinct-operator',
        component: DistinctOperatorComponent,
        children: [
            {
                path:'distinct',
                component: DistinctComponent
            },
            {
                path:'distinct-until-changed',
                component: DistinctUntilChangedComponent
            },
            {
                path:'distinct-until-key-changed',
                component: DistinctUntilKeyChangedComponent
            },
        ]
    },
    {
        path:'filter-operator',
        component: FilterOperatorComponent
    },
    {
        path:'sample-operator',
        component: SampleOperatorComponent
    },
    {
        path:'sampletime-operator',
        component: SampletimeOperatorComponent
    },
    {
        path:'audit-operator',
        component: AuditOperatorComponent
    },
    {
        path:'audittime-operator',
        component: AudittimeOperatorComponent
    },
    {
        path:'throttle-operator',
        component: ThrottleComponent
    },
    {
        path:'throttletime-operator',
        component: ThrottleTimeComponent
    } 
];
