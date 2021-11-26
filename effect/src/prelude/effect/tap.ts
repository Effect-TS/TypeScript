import * as T from "@effect-ts/core/Effect";

/**
 * Returns an effect that effectfully "peeks" at the success of this effect.
 *
 * @ets_extension tap
 */
export function tap_<R, E, A, R1, E1, A1>(
    self: T.Effect<R, E, A>,
    f: (a: A) => T.Effect<R1, E1, A1>,
    __trace?: string | undefined
): T.Effect<R & R1, E | E1, A> {
    return T.tap_(self, f, __trace);
}

export const tap = Pipeable(tap_);