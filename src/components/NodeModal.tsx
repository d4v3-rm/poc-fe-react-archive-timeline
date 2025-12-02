import { useAppDispatch, useAppSelector } from '../app/hooks'
import {
  branchLabels,
  moodLabels,
  poemGroupLabels,
} from '../features/timeline/constants'
import {
  selectEffectiveSelectedPoem,
  selectFilteredEvents,
  selectGroupedPoems,
  selectIsNodeModalOpen,
  selectRelatedEvents,
  selectSelectedEvent,
  selectSelectedNodeIndex,
} from '../features/timeline/timelineSelectors'
import { closeNodeModal, openPoemById, selectRelatedEvent } from '../features/timeline/timelineSlice'

export function NodeModal() {
  const dispatch = useAppDispatch()
  const isNodeModalOpen = useAppSelector(selectIsNodeModalOpen)
  const selectedEvent = useAppSelector(selectSelectedEvent)
  const selectedNodeIndex = useAppSelector(selectSelectedNodeIndex)
  const filteredEvents = useAppSelector(selectFilteredEvents)
  const groupedPoems = useAppSelector(selectGroupedPoems)
  const relatedEvents = useAppSelector(selectRelatedEvents)
  const effectiveSelectedPoem = useAppSelector(selectEffectiveSelectedPoem)

  if (!isNodeModalOpen || !selectedEvent) {
    return null
  }

  const closeModal = () => {
    dispatch(closeNodeModal())
  }

  return (
    <div
      className="node-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="node-modal-title"
      onClick={closeModal}
    >
      <article className="node-modal__card" onClick={(event) => event.stopPropagation()}>
        <header className="node-modal__header">
          <p className={`mood-chip mood-chip--${selectedEvent.mood}`}>
            {moodLabels[selectedEvent.mood]}
          </p>
          <button className="node-modal__close" onClick={closeModal} type="button">
            Chiudi
          </button>
        </header>

        <section className="node-modal__intro" aria-label="Introduzione nodo">
          <div className="node-panel__facts">
            {selectedNodeIndex >= 0 && (
              <p className="node-panel__fact">
                Nodo {selectedNodeIndex + 1}/{filteredEvents.length}
              </p>
            )}
            <p className="node-panel__fact">{selectedEvent.year}</p>
            <p className="node-panel__fact">{selectedEvent.location}</p>
            <p className="node-panel__fact">{branchLabels[selectedEvent.branch]}</p>
          </div>
          <h2 id="node-modal-title">{selectedEvent.title}</h2>
          <p className="node-panel__description">{selectedEvent.description}</p>
          <p className="node-panel__hint">
            Seleziona una poesia per aprire la scheda completa in modale.
          </p>
        </section>

        <div className="node-modal__body">
          <section className="poem-groups" aria-label="Poesie raggruppate per tipologia">
            {groupedPoems.map(({ group, poems }) => (
              <article key={group} className={`poem-group poem-group--${group}`}>
                <p className="poem-group__title">
                  {poemGroupLabels[group]} ({poems.length})
                </p>
                <div className="poem-group__items">
                  {poems.map((poem) => (
                    <button
                      key={poem.id}
                      className={`poem-chip${
                        effectiveSelectedPoem?.id === poem.id ? ' is-active' : ''
                      }`}
                      onClick={() => dispatch(openPoemById(poem.id))}
                      type="button"
                      aria-haspopup="dialog"
                    >
                      <strong>{poem.title}</strong>
                      <span>{poem.author}</span>
                    </button>
                  ))}
                </div>
              </article>
            ))}
          </section>

          <section className="connections" aria-label="Connessioni fra nodi">
            <p className="connections__title">Nodi collegati</p>
            <div className="connections__items">
              {relatedEvents.length > 0 ? (
                relatedEvents.map((event) => (
                  <button
                    key={event.id}
                    onClick={() => dispatch(selectRelatedEvent(event.id))}
                    type="button"
                  >
                    <span>{event.year}</span>
                    <strong>{event.title}</strong>
                  </button>
                ))
              ) : (
                <p className="connections__empty">Nessuna connessione disponibile.</p>
              )}
            </div>
          </section>
        </div>
      </article>
    </div>
  )
}
