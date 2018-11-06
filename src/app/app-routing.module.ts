import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterDetailModule } from './register-detail/register-detail.module';
import { SuccessModule } from './success/success.module';
import { AdminLoginModule } from './admin-login/admin-login.module';
import { ProfileModule } from './profile/profile.module';
import { IndexModule } from './index/index.module';
import { FindJobModule } from './find-job/find-job.module';
import { SendJobModule } from './send-job/send-job.module';
import { JobDetailModule } from './job-detail/job-detail.module';
import { ErrorModule } from './error/error.module';
import { AdminJobModule } from './admin-job/admin-job.module';
import { AdminListModule } from './admin-list/admin-list.module';
import { AdminUserModule } from './admin-user/admin-user.module';
import { AdminLeaderModule } from './admin-leader/admin-leader.module';
import { JobSignModule } from './job-sign/job-sign.module';
import { MyJobRoutingModule } from './my-job/my-job-routing.module';
import { JobLeaderModule } from './job-leader/job-leader.module';
import { JobFeedbackModule } from './job-feedback/job-feedback.module';
import { AdminJobFeedbackModule } from './admin-job-feedback/admin-job-feedback.module';
import { CustomerModule } from './customer/customer.module';
import { AdminCustomerModule } from './admin-customer/admin-customer.module';
import { EnterpriseJobModule } from './enterprise-job/enterprise-job.module';
import { EnterpriseDetailModule } from './enterprise-detail/enterprise-detail.module';
import { AdminEnterpriseModule } from './admin-enterprise/admin-enterprise.module';
import { FindJobTypeModule } from './find-job-type/find-job-type.module';
import { AdminFunctionModule } from './admin-function/admin-function.module';
import { EvaluateModule } from './evaluate/evaluate.module';
import { AdminEvaluateModule } from './admin-evaluate/admin-evaluate.module';
import { EvaluateDetailModule } from './evaluate-detail/evaluate-detail.module'
import { CreditUserModule } from './credit-user/credit-user.module';
import { AdminOverJobModule } from './admin-over-job/admin-over-job.module';
import { AdminEventModule } from './admin-event/admin-event.module';
import { UserBillModule } from './user-bill/user-bill.module';
import { IntegralShopModule } from './integral-shop/integral-shop.module';
import { AdminCustomerDetailModule } from './admin-customer-detail/admin-customer-detail.module';
import { AdminGiftModule } from './admin-gift/admin-gift.module';
import { MyVoucherModule } from './my-voucher/my-voucher.module';
import { AdminExchangeModule } from './admin-exchange/admin-exchange.module';
import { DemandModule } from './demand/demand.module';
import { SendDemandModule } from './send-demand/send-demand.module';
import { MyDemandModule } from './my-demand/my-demand.module';
import { AdminOverMoneyModule } from './admin-over-money/admin-over-money.module';
import { UserGetMoneyModule } from './user-get-money/user-get-money.module';
import { AdminSendNumericalModule } from './admin-send-numerical/admin-send-numerical.module';
import { RecruitmentModule } from './recruitment/recruitment.module';
import { SendRecruitmentModule } from './send-recruitment/send-recruitment.module';
import { MyRecruitmentModule } from './my-recruitment/my-recruitment.module';
import { AdminRecruitmentModule } from './admin-recruitment/admin-recruitment.module';
import { ScsNumModule } from './scs-num/scs-num.module';
const routes: Routes = [
    {
        path: 'register-detail',
        loadChildren: './register-detail/register-detail.module#RegisterDetailModule'
    },
    {
        path: 'success',
        loadChildren: './success/success.module#SuccessModule'
    },
    {
        path: 'admin-login',
        loadChildren: './admin-login/admin-login.module#AdminLoginModule'
    },
    {
        path: 'admin-user',
        loadChildren: './admin-user/admin-user.module#AdminUserModule'
    },
    {
        path: 'profile',
        loadChildren: './profile/profile.module#ProfileModule'
    },
    {
        path: 'index',
        loadChildren: './index/index.module#IndexModule'
    },
    {
        path: 'find-job',
        loadChildren: './find-job/find-job.module#FindJobModule'
    },
    {
        path: 'send-job',
        loadChildren: './send-job/send-job.module#SendJobModule'
    },
    {
        path: 'job-detail/:id',
        loadChildren: './job-detail/job-detail.module#JobDetailModule'
    },
    {
        path: 'admin-job',
        loadChildren: './admin-job/admin-job.module#AdminJobModule'
    },
    {
        path: 'admin-list',
        loadChildren: './admin-list/admin-list.module#AdminListModule'
    },
    {
        path: 'admin-leader',
        loadChildren: './admin-leader/admin-leader.module#AdminLeaderModule'
    },
    {
        path: 'job-sign/:id',
        loadChildren: './job-sign/job-sign.module#JobSignModule'
    },
    {
        path: 'my-job',
        loadChildren: './my-job/my-job.module#MyJobModule'
    },
    {
        path: 'job-leader/:id',
        loadChildren: './job-leader/job-leader.module#JobLeaderModule'
    },
    {
        path: 'job-feedback/:id',
        loadChildren: './job-feedback/job-feedback.module#JobFeedbackModule'
    },
    {
        path: 'admin-job-feedback',
        loadChildren: './admin-job-feedback/admin-job-feedback.module#AdminJobFeedbackModule'
    },
    {
        path: 'customer',
        loadChildren: './customer/customer.module#CustomerModule'
    },
    {
        path: 'admin-customer',
        loadChildren: './admin-customer/admin-customer.module#AdminCustomerModule'
    },
    {
        path: 'enterprise-job',
        loadChildren: './enterprise-job/enterprise-job.module#EnterpriseJobModule'
    },
    {
        path: 'enterprise-detail',
        loadChildren: './enterprise-detail/enterprise-detail.module#EnterpriseDetailModule'
    },
    {
        path: 'admin-enterprise',
        loadChildren: './admin-enterprise/admin-enterprise.module#AdminEnterpriseModule'
    },
    {
        path: 'find-job-type/:type',
        loadChildren: './find-job-type/find-job-type.module#FindJobTypeModule'
    },
    {
        path: 'admin-function',
        loadChildren: './admin-function/admin-function.module#AdminFunctionModule'
    },
    {
        path: 'evaluate/:id',
        loadChildren: './evaluate/evaluate.module#EvaluateModule'
    },
    {
        path: 'admin-evaluate',
        loadChildren: './admin-evaluate/admin-evaluate.module#AdminEvaluateModule'
    },
    {
        path: 'evaluate-detail/:id',
        loadChildren: './evaluate-detail/evaluate-detail.module#EvaluateDetailModule'
    },
    {
        path: 'credit-user',
        loadChildren: './credit-user/credit-user.module#CreditUserModule'
    },
    {
        path: 'admin-over-job',
        loadChildren: './admin-over-job/admin-over-job.module#AdminOverJobModule'
    },
    {
        path: 'admin-event',
        loadChildren: './admin-event/admin-event.module#AdminEventModule'
    },
    {
        path: 'user-bill',
        loadChildren: './user-bill/user-bill.module#UserBillModule'
    },
    {
        path: 'integral-shop',
        loadChildren: './integral-shop/integral-shop.module#IntegralShopModule'
    },
    {
        path: 'admin-customer-detail/:id',
        loadChildren: './admin-customer-detail/admin-customer-detail.module#AdminCustomerDetailModule'
    },
    {
        path: 'admin-gift',
        loadChildren: './admin-gift/admin-gift.module#AdminGiftModule'
    },
    {
        path: 'my-voucher',
        loadChildren: './my-voucher/my-voucher.module#MyVoucherModule'
    },
    {
        path: 'admin-exchange/:vouid/user/:id',
        loadChildren: './admin-exchange/admin-exchange.module#AdminExchangeModule'
    },
    // {
    //     path: 'demand',
    //     loadChildren: './demand/demand.module#DemandModule'
    // },
    // {
    //     path: 'send-demand',
    //     loadChildren: './send-demand/send-demand.module#SendDemandModule'
    // },
    // {
    //     path: 'my-demand',
    //     loadChildren: './my-demand/my-demand.module#MyDemandModule'
    // },
    {
        path: 'admin-over-money/:id',
        loadChildren: './admin-over-money/admin-over-money.module#AdminOverMoneyModule'
    },
    {
        path: 'user-get-money/:id',
        loadChildren: './user-get-money/user-get-money.module#UserGetMoneyModule'
    },
    {
        path: 'admin-send-numerical',
        loadChildren: './admin-send-numerical/admin-send-numerical.module#AdminSendNumericalModule'
    },
    {
        path: 'recruitment',
        loadChildren: './recruitment/recruitment.module#RecruitmentModule'
    },

    {
        path: 'send-recruitment',
        loadChildren: './send-recruitment/send-recruitment.module#SendRecruitmentModule'
    },
    {
        path: 'my-recruitment',
        loadChildren: './my-recruitment/my-recruitment.module#MyRecruitmentModule'
    },
    {
        path: 'admin-recruitment',
        loadChildren: './admin-recruitment/admin-recruitment.module#AdminRecruitmentModule'
    },
    {
        path: 'scs-num',
        loadChildren: './scs-num/scs-num.module#ScsNumModule'
    },
    {
        path: '',
        redirectTo: '/index',
        pathMatch: 'full'
    },
    {
        path: '**',
        loadChildren: './error/error.module#ErrorModule'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
