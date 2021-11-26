import * as T from "@effect-ts/core/Effect";

/**
 * Returns an effect whose success is mapped by the specified `f` function.
 *
 * @ets_extension map
 */
export function map_<R, E, A, B>(
    self: T.Effect<R, E, A>,
    f: (a: A) => B,
    __trace?: string
) {
    return T.map_(self, f, __trace);
}

export const map = Pipeable(map_);
