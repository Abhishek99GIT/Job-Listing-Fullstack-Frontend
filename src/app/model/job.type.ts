export class Job {
    desc: string;
    exp: number;
    profile: string;
    techs: string[];
  
   
    constructor(desc: string, exp: number, profile: string, techs: string[]) {
      this.desc = desc;
      this.exp = exp;
      this.profile = profile;
      this.techs = techs;
    }
  }













// export class Job {
//     desc:string = '';
//     exp:number = 0;
//     profile:string = '';
//     techs:[string]=[''];
// }

/*
export type Job={
    desc:string;
    exp:number;
    profile:string;
    techs:[string];
}
*/