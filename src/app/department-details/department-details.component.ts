import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.css'],
})
export class DepartmentDetailsComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}

  public deparementId: number = 0;

  ngOnInit(): void {
    // let id = parseInt(this.route.snapshot.paramMap.get('id')!);
    // this.deparementId = id;
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id')!);
      this.deparementId = id;
    });
  }

  goNext() {
    let nextId = this.deparementId + 1;
    this.router.navigate(['/department', nextId]);
  }

  goPrevious() {
    let previousId = this.deparementId - 1;
    this.router.navigate(['/department', previousId]);
  }

  goBack() {
    this.router.navigate(['/department',{id:this.deparementId}]);
  }
}
