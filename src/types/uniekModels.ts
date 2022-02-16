/* eslint-disable max-classes-per-file */
interface IPlan {
  id: number
  name: string
  userCreated: string
}

export class Plan {
  id: number;

  name: string;

  userCreated: string;

  constructor({ id, name, userCreated }:IPlan) {
    this.id = id;
    this.name = name;
    this.userCreated = userCreated;
  }
}

interface INote {
  id: number
  categoryId: number
  content: string
  dateCreated: string
  groupPlanId: number
}

export class Note {
  id: number;

  categoryId: number;

  content: string;

  dateCreated: string;

  groupPlanId: number;

  constructor({
    id, categoryId, content, dateCreated, groupPlanId,
  }:INote) {
    this.id = id;
    this.categoryId = categoryId;
    this.content = content;
    this.dateCreated = dateCreated;
    this.groupPlanId = groupPlanId;
  }
}

interface ICategory {
  id: number
  isArchived: boolean
  name: string
  parentNoteCategoryId: number
  groupPlanId: number
}

export class Category {
  id: number;

  isArchived: boolean;

  name: string;

  parentNoteCategoryId: number;

  groupPlanId: number;

  constructor({
    id, isArchived, name, parentNoteCategoryId, groupPlanId,
  }:ICategory) {
    this.id = id;
    this.isArchived = isArchived;
    this.name = name;
    this.parentNoteCategoryId = parentNoteCategoryId;
    this.groupPlanId = groupPlanId;
  }
}
