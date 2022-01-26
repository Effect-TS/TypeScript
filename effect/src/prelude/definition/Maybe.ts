import { Implicit } from "../../utils/Implicit";
import { HKT, Kind } from "../HKT";
import { Functor } from "../typeclasses";

export interface Nothing {
  readonly _tag: "Nothing";
}

export interface Just<A> {
  readonly _tag: "Just";
  readonly value: A;
}

/**
 * @ets type Maybe
 */
export type Maybe<A> = Nothing | Just<A>;

/**
 * @ets type MaybeOps
 */
export interface MaybeOps {}

export const Maybe: MaybeOps = {};

/**
 * @ets unify Maybe
 */
export function unifyMaybe<X extends Maybe<any>>(self: X): Maybe<
    [X] extends [Maybe<infer A>] ? A : never
> {
    return self
}

/**
 * @ets static MaybeOps nothing
 */
export function nothing(): Maybe<never> {
  return { _tag: "Nothing" };
}

/**
 * @ets static MaybeOps just
 */
export function just<A>(value: A): Maybe<A> {
  return { _tag: "Just", value };
}

/**
 * @ets fluent Maybe match
 */
export function match_<A, B, C>(
  self: Maybe<A>,
  onNothing: () => B,
  onJust: (a: A) => C
): B | C {
  return self._tag === "Nothing" ? onNothing() : onJust(self.value);
}

/**
 * @ets operator Maybe +
 * @ets fluent Maybe zip
 */
export function zip_<A, B>(
  self: Maybe<A>,
  that: Maybe<B>
): Maybe<readonly [A, B]> {
  throw new Error("unimplemented");
}

/**
 * @ets fluent Maybe something
 */
export function something<A, F extends HKT>(
  self: Maybe<A>,
  F: Implicit<Functor<F>>
): <B>(f: (a: A) => Kind<F, B>) => Maybe<Kind<F, B>> {
  throw new Error("unimplemented");
}

interface MaybeF extends HKT {
  readonly type: Maybe<this["A"]>;
}

/**
 * @ets implicit Functor Maybe
 */
declare const FunctorMaybe: Functor<MaybeF>;

export const result = Maybe.just(0).match(
  () => 0,
  () => 1
);
export const op = Maybe.just(0) + Maybe.just(1);

const x = Maybe.just(0).something();
