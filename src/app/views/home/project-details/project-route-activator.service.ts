import { Injectable } from "@angular/core";
import { Router, CanActivate, ActivatedRouteSnapshot } from "@angular/router";
import { ProjectService } from "../../../shared/services/project.service";

@Injectable()
export class ProjectRouteActivator implements CanActivate {
    constructor(private projectService:ProjectService, private router:Router) {

    }
    canActivate(route:ActivatedRouteSnapshot){
        const projectExists = !!this.projectService.getProject(route.params['id'])

        if (!projectExists)
            this.router.navigate(['/404'])
        return projectExists
    }
}