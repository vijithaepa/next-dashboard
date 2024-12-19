import {formatCurrency} from "@/app/lib/utils";
import {InvoiceForm, Revenue} from "@/app/lib/definitions";

export async function fetchRevenue() {

    return [
        {month: 'Jan', revenue: 2000},
        {month: 'Feb', revenue: 1800},
        {month: 'Mar', revenue: 2200},
        {month: 'Apr', revenue: 2500},
        {month: 'May', revenue: 2300},
        {month: 'Jun', revenue: 3200},
        {month: 'Jul', revenue: 3500},
        {month: 'Aug', revenue: 3700},
        {month: 'Sep', revenue: 2500},
        {month: 'Oct', revenue: 2800},
        {month: 'Nov', revenue: 3000},
        {month: 'Dec', revenue: 4800}
    ]
        ;

}

export async function fetchCardData() {
    return {
        numberOfCustomers: '6',
        numberOfInvoices: '14',
        totalPaidInvoices: '$1,006.26',
        totalPendingInvoices: '$1,367.32'
    };
}

export async function fetchFilteredInvoices(
    query: string,
    currentPage: number,
) {
    return [
        {
            id: 'dea1983f-80b4-4206-8cc1-04ea0cb65aa1',
            amount: 11100,
            date: '2024-09-30T14:00:00.000Z',
            status: 'pending',
            name: 'Amy Burns',
            email: 'amy@burns.com',
            image_url: '/customers/amy-burns.png'
        },
        {
            id: '20a4f26d-6e01-4bea-8c4c-12767bff8131',
            amount: 44800,
            date: '2023-09-09T14:00:00.000Z',
            status: 'paid',
            name: 'Michael Novotny',
            email: 'michael@novotny.com',
            image_url: '/customers/michael-novotny.png'
        },
        {
            id: 'fa6f1033-1b07-4ef3-9071-ba57a332e597',
            amount: 500,
            date: '2023-08-18T14:00:00.000Z',
            status: 'paid',
            name: 'Delba de Oliveira',
            email: 'delba@oliveira.com',
            image_url: '/customers/delba-de-oliveira.png'
        },
        {
            id: '869c7c2b-30c3-43ca-a274-58e002e51cbc',
            amount: 34577,
            date: '2023-08-04T14:00:00.000Z',
            status: 'pending',
            name: 'Balazs Orban',
            email: 'balazs@orban.com',
            image_url: '/customers/balazs-orban.png'
        },
        {
            id: '9ae025e9-e1f9-4be4-baca-5f50a8979c4e',
            amount: 54246,
            date: '2023-07-15T14:00:00.000Z',
            status: 'pending',
            name: 'Lee Robinson',
            email: 'lee@robinson.com',
            image_url: '/customers/lee-robinson.png'
        },
        {
            id: '4df83b44-15fa-44c4-a65b-45c4a63ae680',
            amount: 666,
            date: '2023-06-26T14:00:00.000Z',
            status: 'pending',
            name: 'Evil Rabbit',
            email: 'evil@rabbit.com',
            image_url: '/customers/evil-rabbit.png'
        }
    ]
}
export async function fetchInvoicesPages(query: string) {
    return 3;
}

export async function fetchLatestInvoices() {
    return [
        {
            amount: '$111.00',
            name: 'Amy Burns',
            image_url: '/customers/amy-burns.png',
            email: 'amy@burns.com',
            id: 'dea1983f-80b4-4206-8cc1-04ea0cb65aa1'
        },
        {
            amount: '$448.00',
            name: 'Michael Novotny',
            image_url: '/customers/michael-novotny.png',
            email: 'michael@novotny.com',
            id: '20a4f26d-6e01-4bea-8c4c-12767bff8131'
        },
        {
            amount: '$5.00',
            name: 'Delba de Oliveira',
            image_url: '/customers/delba-de-oliveira.png',
            email: 'delba@oliveira.com',
            id: 'fa6f1033-1b07-4ef3-9071-ba57a332e597'
        },
        {
            amount: '$345.77',
            name: 'Balazs Orban',
            image_url: '/customers/balazs-orban.png',
            email: 'balazs@orban.com',
            id: '869c7c2b-30c3-43ca-a274-58e002e51cbc'
        },
        {
            amount: '$542.46',
            name: 'Lee Robinson',
            image_url: '/customers/lee-robinson.png',
            email: 'lee@robinson.com',
            id: '9ae025e9-e1f9-4be4-baca-5f50a8979c4e'
        }
    ];
}

export async function fetchInvoiceById(id: string) : Promise<InvoiceForm> {
    return  {
        id: 'dea1983f-80b4-4206-8cc1-04ea0cb65aa1',
        customer_id: 'cc27c14a-0acf-4f4a-a6c9-d45682c144b9',
        amount: 111,
        status: 'pending'
    }
}

export async function fetchCustomers() {
    return [
        { id: 'cc27c14a-0acf-4f4a-a6c9-d45682c144b9', name: 'Amy Burns' },
        { id: '13d07535-c59e-4157-a011-f8d2ef4e0cbb', name: 'Balazs Orban' },
        {
            id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
            name: 'Delba de Oliveira'
        },
        { id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa', name: 'Evil Rabbit' },
        { id: '3958dc9e-742f-4377-85e9-fec4b6a6442a', name: 'Lee Robinson' },
        {
            id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
            name: 'Michael Novotny'
        }
    ]
}

export async function getUser(email:string) : Promise<any> {
    return {
        id: '410544b2-4001-4271-9855-fec4b6a6442b',
        name: 'User',
        email: 'user@nextmail.com',
        password: '$2b$10$PFRXNTCeO.uaNYjc3OVxC.GwAAa3AmRnPFBsMsFEf3/BSEbpBqb8i'
    }
}