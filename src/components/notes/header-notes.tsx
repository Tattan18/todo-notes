// import { Searcher } from './searcher'
import { CreateNoteButton } from './create-note-button'

export function HeaderNotes() {
  return (
    <section className="sticky top-0 bg-gray-300 py-6">
      <CreateNoteButton />
      {/* <Searcher /> */}
    </section>
  )
}
