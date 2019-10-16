import { HelpComponent } from './help/help.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home.component';
import { Routes } from '@angular/router';
import { ReportComponent } from './report/report.component';
import { AuthGuard } from '../gaurds/auth.guard';
import { CostcenterComponent} from './costcenter/costcenter.component';
import { BusinessunitComponent} from './businessunit/businessunit.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { SubbusinessunitComponent } from './subbusinessunit/subbusinessunit.component';
import { EmployeeeducationComponent } from './employeeeducation/employeeeducation.component';
import { MaritalstatusComponent } from './maritalstatus/maritalstatus.component';
import { StatelistComponent } from './statelist/statelist.component';
import { UserlistComponent } from './userlist/userlist.component';
import { GpaComponent } from './gpa/gpa.component';
import { ResoucetypeComponent } from './resoucetype/resoucetype.component';
import { EmployeestatusComponent } from './employeestatus/employeestatus.component';
import { SeparationtypeComponent } from './separationtype/separationtype.component';
import { RoleComponent } from './role/role.component';
import { SystemComponent } from './system/system.component';
import { EmployeedesignationComponent } from './employeedesignation/employeedesignation.component';
import { EmployeeComponent } from './employee/employee.component';
import { PassportcenterComponent } from './passportcenter/passportcenter.component';
import { EmployeeeditComponent} from './employee/employeeedit/employeeedit.component';
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

export const HomeRoutes: Routes = [
    {path:'',component:HomeComponent,canActivate:[AuthGuard],
    children:[
    {path:'',component:DashboardComponent},
    {path:'dashboard',component:DashboardComponent},
    {path:'report',component:ReportComponent},
    {path:'costcenter',component:CostcenterComponent},
    
    {path:'businessunit',component:BusinessunitComponent},
    {path:'subbusinessunit',component:SubbusinessunitComponent},
    {path:'employeeeducation',component:EmployeeeducationComponent},
    {path:'maritalstatus',component:MaritalstatusComponent},
    {path:'statelist',component:StatelistComponent},
    {path:'userlist',component:UserlistComponent},
    {path:'insurance',component:InsuranceComponent},
    {path:'resoucetype',component:ResoucetypeComponent},
    {path:'employeestatus',component:EmployeestatusComponent},
    {path:'employee',component:EmployeeComponent},
    {path:'employeedesignation',component:EmployeedesignationComponent},
    {path:'separationtype',component:SeparationtypeComponent},
    {path:'passportcenter',component:PassportcenterComponent},
    {path:'gpa',component:GpaComponent},
    {path:'role',component:RoleComponent},
    {path:'system',component:SystemComponent},
    {path:'Empskill',component:SkillMasterComponent},
    {path:'help',component:HelpComponent},
    {path:'employeeedit/:employee_Id',component:EmployeeeditComponent,
    children:
    [
    
    { path: '', redirectTo: 'basicInfo', pathMatch: 'full' },
    {path:'kye',component:KyeComponent, pathMatch: 'full'},
    {path:'title',component:EmployeeTitleComponent},
    {path:'experience',component:ExperienceComponent, pathMatch: 'full'},
    {path:'bankdetails',component:BankComponent},
    {path:'projectdetails',component:ProjectComponent},
    {path:'dependentdetails',component:DependentComponent},
    {path:'basicInfo',component:BasicInfoComponent, pathMatch: 'full'},
    {path:'businessunit',component:BusinessUnitComponent},
    {path:'education',component:EducationComponent, pathMatch: 'full'},
    {path:'skill',component:SkillComponent},
    {path:'certification',component:CertificationComponent},
    {path:'contact',component:ContactComponent},
    {path:'onboardingdetails',component:OnBoardingComponent},
    {path:'insurance',component:InsuranceDetailsComponent}
    ]
}
    ]
   }]
