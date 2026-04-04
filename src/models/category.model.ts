import { z } from 'zod';

export const DEFAULT_CATEGORY_COLOR = '#9E9E9E';

export const categorySchema = z.object({
  id: z.string(),
  name: z.string(),
  color: z.string(),
  deleted: z.boolean(),
});

export const categoriesSchema = z.array(categorySchema);

export type Category = z.infer<typeof categorySchema>;

export const OTHERS_CATEGORY_ID = 'others';
export const OTHERS_CATEGORY: Category = {
  id: OTHERS_CATEGORY_ID,
  name: 'Others',
  color: DEFAULT_CATEGORY_COLOR,
  deleted: false,
};
