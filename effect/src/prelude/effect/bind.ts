import * as T from "@effect-ts/core/Effect";

/**
 * Binds an effectful value in a `do` scope
 *
 * @ets_extension bind
 */
export function bind_<R2, E2, R, E, A, K extends Record<string, unknown>, N extends string>(
    self: T.Effect<R2, E2, K>,
    tag: Exclude<N, keyof K>,
    f: (_: K) => T.Effect<R, E, A>,
    __trace?: string | undefined
): T.Effect<R & R2, E2 | E, { readonly [k in N | keyof K]: k extends keyof K ? K[k] : A; }> {
    // @ts-expect-error
    return T.bind_(self, tag, f, __trace);
}

export const bind = Pipeable(bind_);