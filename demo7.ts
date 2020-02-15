export interface Info{
    getFullName()
}
export class Employee implements Info {
    getFullName()
    {
        throw new Error("method not implemented");
        
    }

}
export class Employee1 implements Info{
    getFullName()
    {
        console.log("employee1");
    }
}
