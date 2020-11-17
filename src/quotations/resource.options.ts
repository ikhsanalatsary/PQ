import AdminBro, { RecordJSON, ResourceWithOptions } from "admin-bro";
import { Quotation } from "./entities/quotations.entity";

export const QuotationResourceOptions: ResourceWithOptions = {
    resource: Quotation,
    options: {
        navigation: {
            name: 'Quotation Management'
        },
        properties: {
            items: {
                type: 'mixed',
                isArray: true
            },
            'items.description': {
                type: 'string'
            },
            'items.amount': {
                type: 'number'
            },
            tnc: {
                type: 'richtext',
            },
            bankInfo: {
                type: 'richtext',
            },
            companyName: {
                isVisible: { show: true },
            },
            companyPhone: {
                isVisible: { show: true },
            },
            customerName: {
                isVisible: { show: true },
            },
            customerPhone: {
                isVisible: { show: true },
            },
            customerId: {
                reference: 'Customer',
                isVisible: { edit: true },
                position: 2
            },
            subTotal: {
                components: {
                    edit: AdminBro.bundle('./components/sub-total.component.tsx'),
                }
            }
        },
        // showProperties: ["companyName", "createdAt", "updatedAt", "id", "title", "items.0.items.amount", "items.0.items.description", "tnc", "bankInfo", "subTotal", "vat", "total", "isIncludedTax", "customer.name", "customer.email", "customer.address", "customer.phone", "customer.companyName", "customer.companyPhone", "customer.companyFax", "customer.remarks"],
        actions: {
            show: {
                handler: async (req, res, ctx) => {
                    // console.log("req, res, ctx", ctx)
                    console.log("resource => ", ctx.resource._decorated)
                    ctx.record.params.companyName = ctx.record.params['customer.companyName'];
                    ctx.record.params.companyPhone = ctx.record.params['customer.companyPhone'];
                    ctx.record.params.customerName = ctx.record.params['customer.name'];
                    ctx.record.params.customerPhone = ctx.record.params['customer.phone'];
                    return {
                        record: ctx.record.toJSON()
                    };
                },
            },
            // edit: {
            //     component: AdminBro.bundle()
            // }
        },
    },
};