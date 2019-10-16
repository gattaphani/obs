import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReportComponent } from './report/report.component';
import { RouterModule } from "@angular/router";
import { HelpComponent } from './help/help.component';
import { CostcenterComponent } from './costcenter/costcenter.component';
import { BusinessunitComponent } from './businessunit/businessunit.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { OrderModule } from 'ngx-order-pipe';
import { InsuranceComponent } from './insurance/insurance.component';
import { SubbusinessunitComponent } from './subbusinessunit/subbusinessunit.component';
import { EmployeeeducationComponent } from './employeeeducation/employeeeducation.component';
import { MaritalstatusComponent } from './maritalstatus/maritalstatus.component';
import { StatelistComponent } from './statelist/statelist.component';
import { UserlistComponent } from './userlist/userlist.component';
import { GpaComponent } from './gpa/gpa.component';
import { EmployeestatusComponent } from './employeestatus/employeestatus.component';
import { ResoucetypeComponent } from './resoucetype/resoucetype.component';
import { SeparationtypeComponent } from './separationtype/separationtype.component';
import { RoleComponent } from './role/role.component';
import { SystemComponent } from './system/system.component';
import { EmployeedesignationComponent } from './employeedesignation/employeedesignation.component';
import { EmployeeComponent } from './employee/employee.component';
import { PassportcenterComponent } from './passportcenter/passportcenter.component';
import { EmployeeeditComponent } from './employee/employeeedit/employeeedit.component';
import { BasicInfoComponent } from './employee/employeeedit/basic-info/basic-info.component';
import { OnBoardingComponent } from './employee/employeeedit/on-boarding/on-boarding.component';
import { EducationComponent } from './employee/employeeedit/education/education.component';
import { ExperienceComponent } from './employee/employeeedit/experience/experience.component';
import { SkillComponent } from './employee/employeeedit/skill/skill.component';
import { CertificationComponent } from './employee/employeeedit/certification/certification.component';
import { InsuranceDetailsComponent } from './employee/employeeedit/insurance-details/insurance-details.component';
import { BankComponent } from './employee/employeeedit/bank/bank.component';
import { ContactComponent } from './employee/employeeedit/contact/contact.component';
import { KyeComponent } from './employee/employeeedit/kye/kye.component';
import { BusinessUnitComponent } from './employee/employeeedit/business-unit/business-unit.component';
import { EmployeeTitleComponent } from './employee/employeeedit/employee-title/employee-title.component';
import { ProjectComponent } from './employee/employeeedit/project/project.component';
import { DependentComponent } from './employee/employeeedit/dependent/dependent.component';
import { SkillMasterComponent } from './skill-master/skill-master.component';
import { GridModule, PageService, ToolbarService } from '@syncfusion/ej2-angular-grids';
@NgModule({
  declarations: 
  [
    DashboardComponent, 
    ReportComponent, 
    HelpComponent, 
    CostcenterComponent, 
    BusinessunitComponent, 
    InsuranceComponent, 
    SubbusinessunitComponent, 
    EmployeeeducationComponent, 
    MaritalstatusComponent, 
    StatelistComponent, 
    UserlistComponent,  
    GpaComponent, 
    EmployeestatusComponent, 
    ResoucetypeComponent,  
    SeparationtypeComponent, 
    RoleComponent, 
    SystemComponent, 
    EmployeedesignationComponent, 
    EmployeeComponent, 
    PassportcenterComponent, 
    EmployeeeditComponent, 
    BasicInfoComponent, 
    OnBoardingComponent, 
    EducationComponent, 
    ExperienceComponent, 
    SkillComponent, 
    CertificationComponent, 
    InsuranceDetailsComponent, 
    BankComponent, 
    ContactComponent, 
    KyeComponent, 
    BusinessUnitComponent, 
    EmployeeTitleComponent, 
    ProjectComponent, 
    DependentComponent, 
    SkillMasterComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    HttpClientModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    FormsModule,
    OrderModule,
    GridModule,
   
  ]
})
export class HomeModule { }
