import { Rule } from "sanity";


export default {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name',
            validation: (Rule: Rule) => Rule.required().error('Name is required'),
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 200, // will be ignored if slugify is set
                slugify: (input: string) => input
                    .toLowerCase()
                    .replace(/\s+/g, '-')
                    .slice(0, 200)
            }
        },
        {
            name: 'image',
            type: 'image',
            title: 'Image',
            options: {
                hotspot: true,
            },
            description: 'Upload an image of the product.',
        },
        {
            name: 'price',
            type: 'number',
            title: 'Price',
            validation: (Rule: Rule) => Rule.required().error('Price is required'),
        },
        {
            name: 'description',
            type: 'text',
            title: 'Description',
            validation: (Rule: Rule) =>
                Rule.max(150).warning('Keep the description under 150 characters.'),
        },
        {
            name: 'discountPercentage',
            type: 'number',
            title: 'Discount Percentage',
            validation: (Rule: Rule) =>
                Rule.min(0).max(100).warning('Discount must be between 0 and 100.'),
        },
        {
            name: 'isFeaturedProduct',
            type: 'boolean',
            title: 'Is Featured Product',
        },
        {
            name: 'stockLevel',
            type: 'number',
            title: 'Stock Level',
            validation: (Rule: Rule) => Rule.min(0).error('Stock level must be a positive number.'),
        },
        {
            name: 'category',
            type: 'string',
            title: 'Category',
            options: {
                list: [
                    { title: 'Chair', value: 'Chair' },
                    { title: 'Sofa', value: 'Sofa' },
                ],
            },
            validation: (Rule: Rule) => Rule.required().error('Category is required'),
        },
        {
            name: "starRating",
            type: "number",
            title: "Star Rating",
            validation: (rule: Rule) => rule.min(1).max(5),
        },
        {
            name: "ratingCount",
            type: "number",
            title: "Rating Count"
        },
        {
            name: 'isLatestProduct',
            type: 'boolean',
            title: 'Is Latest Product',
        },
        {
            name: 'isTrendingProduct',
            type: 'boolean',
            title: 'Is Trending Product',
        },
    ],
};