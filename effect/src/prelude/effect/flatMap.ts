import * as T from "@effect-ts/core/Effect";

/**
 * Returns an effect that models the execution of this effect, followed by
 * the passing of its value to the specified continuation function `f`,
 * followed by the effect that it returns.
 *
 * @ets_extension flatMap
 */
export function flatMap_<R, E, A, R1, E1, A1>(
    self: T.Effect<R, E, A>,
    f: (a: A) => T.Effect<R1, E1, A1>,
    __trace?: string | undefined
) {
    return T.chain_(self, f, __trace);
}

export const flatMap = Pipeable(flatMap_);