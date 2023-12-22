import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

type departmentObjectType = {
  id: number;
  name: string;
};

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css'],
})
export class DepartmentListComponent implements OnInit {
  departments: departmentObjectType[] = [
    { id: 1, name: 'Angular' },
    { id: 2, name: 'NodeJs' },
    { id: 3, name: 'MongoDB' },
    { id: 4, name: 'Rust' },
    { id: 5, name: 'Bootstrap' },
  ];

  selectdId: number | null = null;

  constructor(private router: Router, private route: ActivatedRoute) {}

  onSelect(id: number) {
    this.router.navigate(['/department', id]);
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id')!);
      this.selectdId = id;
    });
  }

  isSelected(id: Number): Boolean {
    return this.selectdId === id;
  }
}
