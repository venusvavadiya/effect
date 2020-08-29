import type { Array } from "../../Array"
import type { Effect } from "../../Effect"
import type { Managed } from "../../Managed"
import type { Option } from "../../Option"
import { Stream } from "./definitions"

export const apply = <S, R, E, O>(
  proc: Managed<S, R, never, Effect<S, R, Option<E>, Array<O>>>
) => new Stream<S, R, E, O>(proc)
