import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { JhipsterSampleOracleHrAppRegionModule } from './region/region.module';
import { JhipsterSampleOracleHrAppCountryModule } from './country/country.module';
import { JhipsterSampleOracleHrAppLocationModule } from './location/location.module';
import { JhipsterSampleOracleHrAppDepartmentModule } from './department/department.module';
import { JhipsterSampleOracleHrAppTaskModule } from './task/task.module';
import { JhipsterSampleOracleHrAppEmployeeModule } from './employee/employee.module';
import { JhipsterSampleOracleHrAppJobModule } from './job/job.module';
import { JhipsterSampleOracleHrAppJobHistoryModule } from './job-history/job-history.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        JhipsterSampleOracleHrAppRegionModule,
        JhipsterSampleOracleHrAppCountryModule,
        JhipsterSampleOracleHrAppLocationModule,
        JhipsterSampleOracleHrAppDepartmentModule,
        JhipsterSampleOracleHrAppTaskModule,
        JhipsterSampleOracleHrAppEmployeeModule,
        JhipsterSampleOracleHrAppJobModule,
        JhipsterSampleOracleHrAppJobHistoryModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterSampleOracleHrAppEntityModule {}
