import { Injectable } from '@nestjs/common';
import { PowerService } from "../power/power.service";

@Injectable()
export class CpuService {

  constructor(public powerService: PowerService) {
  }

  compute(a: number, b: number){
    console.log('Drawing 10 watts')
    this.powerService.supplyPower(10)
    return a+b
  }
}
