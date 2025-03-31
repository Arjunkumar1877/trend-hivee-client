/* eslint-disable @typescript-eslint/no-explicit-any */

export function generateNullableSchema(args: { properties: Record<string, any> }) {
  for (const propertyName of Object.keys(args.properties)) {
    args.properties[propertyName] = { ...args.properties[propertyName], nullable: true }
  }

  return {
    ...args,
    properties: args.properties,
    required: Object.keys(args.properties),
  }
}

export function swaggerEndpoint(args: {
  operationId: string
  parameters?: string[]
  tag: string
  response: any
  request?: any
  paginated?: boolean
}) {
  return {
    operationId: args.operationId,
    parameters: [
      ...(args.parameters?.map((name) => ({
        in: 'path',
        name,
        required: true,
        schema: { type: 'string' },
      })) ?? []),
      ...(args.paginated
        ? [
            {
              description: 'Zero-based page index (0..N)',
              in: 'query',
              name: 'page',
              required: false,
              schema: {
                default: 0,
                minimum: 0,
                type: 'integer',
              },
            },
            {
              description: 'The size of the page to be returned',
              in: 'query',
              name: 'size',
              required: false,
              schema: {
                default: 2147483647,
                minimum: 1,
                type: 'integer',
              },
            },
            {
              description:
                'Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.',
              in: 'query',
              name: 'sort',
              required: false,
              schema: {
                default: ['created_at,ASC'],
                items: {
                  type: 'string',
                },
                type: 'array',
              },
            },
          ]
        : []),
    ],
    requestBody: args.request
      ? {
          content: {
            'application/json': {
              schema: args.request,
            },
          },
          required: true,
        }
      : undefined,
    responses: {
      '200': {
        content: {
          'application/com.teetime-v1+json': { schema: args.response },
        },
        description: 'OK',
      },
    },
    tags: [args.tag],
  }
}

export function swaggerSchema(args: {
  string?: string[]
  number?: string[]
  boolean?: string[]
  custom?: Record<string, any>
  optional?: string[]
}) {
  const properties = {
    ...Object.fromEntries(args.string?.map((prop) => [prop, { type: 'string' }]) ?? []),
    ...Object.fromEntries(args.number?.map((prop) => [prop, { type: 'number' }]) ?? []),
    ...Object.fromEntries(args.boolean?.map((prop) => [prop, { type: 'boolean' }]) ?? []),
    ...args.custom,
  }
  const required = Object.keys(properties).filter((prop) => !args.optional?.includes(prop))

  return {
    type: 'object',
    properties,
    required,
  }
}

export function swaggerPageSchema(args: { item: any }) {
  return {
    properties: {
      content: {
        items: args.item,
        type: 'array',
      },
      empty: {
        type: 'boolean',
      },
      first: {
        type: 'boolean',
      },
      last: {
        type: 'boolean',
      },
      number: {
        format: 'int32',
        type: 'integer',
      },
      numberOfElements: {
        format: 'int32',
        type: 'integer',
      },
      pageable: {
        $ref: '#/components/schemas/PageableObject',
      },
      size: {
        format: 'int32',
        type: 'integer',
      },
      sort: {
        $ref: '#/components/schemas/SortObject',
      },
      totalElements: {
        format: 'int64',
        type: 'integer',
      },
      totalPages: {
        format: 'int32',
        type: 'integer',
      },
    },
    type: 'object',
  }
}
