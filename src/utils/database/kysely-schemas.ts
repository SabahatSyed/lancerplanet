import { Kysely, PostgresDialect, GeneratedAlways, UniqueConstraintNode, ForeignKeyConstraintNode } from "kysely";

interface users {
    u_id: GeneratedAlways<number>;
    email: string;
}
interface f_education {
    f_e_id: GeneratedAlways<number>;
    f_id: GeneratedAlways<number>;
    school: string;
    from_: string;
    to_: string;
    ed_desc: string;
    degree: string;
}
interface f_certification {
    f_c_id: GeneratedAlways<number>;
    f_id: GeneratedAlways<number>;
    title: string;
    organization: string;
    comp_date: string;
    creds_id: string;
}

interface wallets {
    u_id: ForeignKeyConstraintNode;
    address: string;
}
interface user_info {
    u_id: GeneratedAlways<number>;
    f_name: string;
    l_name: string;
    country: string;
    phone: string;
}

interface projects {
    u_id: GeneratedAlways<number>;
    project_id: GeneratedAlways<number>;
    title: string;
    description: string;
    budget: number;
    scope: string;
    docs: string;
    date_posted: string;
    time_posted: string;
}

interface freelancers {
    f_id: GeneratedAlways<number>;
    u_id: GeneratedAlways<number>;
    title: string;
    image: string;
    description: string;
}
interface f_work_history {
    f_wh_id: GeneratedAlways<number>;
    f_id: GeneratedAlways<number>;
    company: string;
    job_title: string;
    job_desc: string;
    w_location: string;
}
interface Database {
    users: users;
    wallets: wallets;
    user_info: user_info;
    projects: projects;
    freelancers: freelancers;
    f_work_history: f_work_history;
    f_education: f_education;
    f_certification: f_certification;
}
