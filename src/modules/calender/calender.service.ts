import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Calender, User } from "../../emtities"
import { Repository } from "typeorm";
import { NewCalender } from "../calender/DTO/newcalender.dto";

@Injectable()
export class CalenderService {
  constructor(@InjectRepository(Calender) private readonly calenderRepository: Repository<Calender>) { }

  async getCalender(): Promise<Calender[]> {

    return await this.calenderRepository.find();
  }

  create(calender) {
    return this.calenderRepository.save({ ...calender });
  }

  async CreateCalender(data: NewCalender): Promise<Calender> {
    let calender = new Calender();
    calender.activity_calender = data.activity_calender;
    calender.date_calender = data.date_calender;
    calender.state_calender = data.state_calender;
    calender.fk_user = new User();
    calender.fk_user.id_user = data.fk_user;

    return await this.calenderRepository.save(calender);
  }


}