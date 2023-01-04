import { FilterArguments } from "https://deno.land/x/ddc_vim@v3.2.0/base/filter.ts";
import { BaseFilter, Item } from "https://deno.land/x/ddc_vim@v3.2.0/types.ts";

type Params = {};

export class Filter extends BaseFilter<Params> {
  filter(
    { items }: FilterArguments<Params>,
  ): Promise<Item[]> {
    return Promise.resolve(items.filter((item) => item.kind !== "Text"));
  }

  params(): Params {
    return {};
  }
}
