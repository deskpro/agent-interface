import * as flatMapDeep from "lodash/flatMapDeep";

import { FieldGroupingListItemType } from "./FieldGroupingListItemType";

const childrenMapper = (item: FieldGroupingListItemType) =>
  [item.id].concat((item.children || []).map(childrenMapper));

export default (children: FieldGroupingListItemType[]) =>
  flatMapDeep(children, childrenMapper);
