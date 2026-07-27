'use client';

// Cosmos pack: birth data, the all-systems read (incl. Vedic kundli), tarot.
import React from 'react';
import { css } from '@/lib/css';

function Stars({ v }) {
  return v.stars.map((st, i) => (
    <div key={i} style={css('position:absolute;top:' + st.top + ';left:' + st.left + ';width:' + st.size + ';height:' + st.size + ';border-radius:50%;background:#e9e9ed;opacity:.5;animation:twinkle ' + st.dur + ' ease-in-out ' + st.delay + ' infinite')}></div>
  ));
}

const COSMOS_VARS = '--color-bg:#161826;--color-surface:#232532;--color-text:#e9e9ed;--color-divider:rgba(233,233,237,.16);--color-accent:#9184d9;--color-accent-100:#f5f4ff;--color-accent-200:#e7e5fe;--color-accent-300:#d2cefd;--color-accent-400:#b5abfc;--color-accent-500:#968ae0;--color-accent-600:#796cbf;--color-accent-700:#5d5294;--color-accent-800:#423a6a;--color-accent-900:#2b2741;--color-neutral-200:#e4e7f5;--color-neutral-300:#cfd3e5;--color-neutral-400:#b2b6ca;--color-neutral-500:#9397ab;--color-neutral-600:#75798c;--color-neutral-700:#595d6c;--color-neutral-800:#3f424d;--color-neutral-900:#292b31;--shadow-sm:0 0 0 1px #3f424d;color:#e9e9ed';

export function CosmosBirth({ v }) {
  if (!v.sc.cosmosBirth) return null;
  return (
    <div style={css('min-height:874px;padding:58px 16px 40px;position:relative;overflow:hidden;background:radial-gradient(130% 46% at 78% 2%,#2b2749 0%,#12132250 55%,#0f1120 100%);' + COSMOS_VARS)}>
      <Stars v={v} />
      <div style={css('position:relative')}>
        <div style={css('display:flex;align-items:center;gap:10px')}>
          <div onClick={v.goCosmos} style={css('width:34px;height:34px;border-radius:11px;border:1px solid #3f424d;display:flex;align-items:center;justify-content:center;cursor:pointer;flex:none')}><i className="ph ph-caret-left" style={css('font-size:15px;color:#cfd3e5')}></i></div>
          <div style={css('flex:1;font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:#75798c')}>Cosmos · birth data</div>
        </div>
        <div style={css('margin-top:20px;font-size:27px;font-weight:500;line-height:1.2;text-wrap:pretty')}>Three details, and every system opens up</div>
        <div style={css('margin-top:11px;font-size:13.5px;line-height:1.6;color:#b2b6ca')}>Date gives your sun. Time gives your rising sign and houses. Place gives the sky as it actually stood. Without the last two, I will read only what is honest — and say so.</div>
        <div style={css('margin-top:20px;display:flex;flex-direction:column;gap:10px')}>
          {v.birthFields.map((b, i) => (
            <div key={i} style={css('padding:15px;border-radius:15px;background:#232532;border:1px solid rgba(233,233,237,.16)')}>
              <div style={css('display:flex;align-items:center;justify-content:space-between')}>
                <div style={css('font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:#75798c')}>{b.label}</div>
                <div style={css('font-size:9.5px;letter-spacing:.06em;text-transform:uppercase;color:' + b.tagFg)}>{b.tag}</div>
              </div>
              <input value={b.value} onChange={b.set} placeholder={b.ph} style={css('margin-top:9px;width:100%;background:transparent;border:none;outline:none;color:#e9e9ed;font-size:19px;font-family:' + b.font)} />
              <div style={css('margin-top:8px;font-size:11px;line-height:1.5;color:#75798c')}>{b.note}</div>
            </div>
          ))}
        </div>
        <div onClick={v.toggleUnknownTime} style={css('margin-top:11px;display:flex;align-items:center;gap:10px;padding:12px 14px;border-radius:12px;border:1px solid rgba(233,233,237,.16);cursor:pointer')}>
          <i className={'ph ' + v.unknownIcon} style={css('font-size:17px;color:' + v.unknownFg)}></i>
          <div style={css('flex:1;font-size:12.5px;color:#cfd3e5')}>I do not know my birth time</div>
        </div>
        <div style={css('margin-top:13px;padding:14px;border-radius:13px;background:#2b2741;border:1px solid #423a6a;font-size:11.5px;line-height:1.55;color:#d2cefd')}>{v.birthConfidence}</div>
        <div onClick={v.goCosmos} style={css('margin-top:18px;height:52px;border-radius:14px;border:1px solid #9184d9;display:flex;align-items:center;justify-content:center;font-size:15px;color:#e7e5fe;cursor:pointer')}>Read my chart</div>
        <div style={css('margin-top:12px;font-size:10.5px;line-height:1.5;color:#75798c')}>Birth data lives in your vault with everything else. It is never sent to a model provider, and Cosmos never touches your health or money data.</div>
      </div>
    </div>
  );
}

export function Cosmos({ v }) {
  if (!v.sc.cosmos) return null;
  return (
    <div style={css('min-height:874px;padding:58px 16px 40px;position:relative;overflow:hidden;background:radial-gradient(130% 40% at 80% 1%,#2f2a55 0%,#161a30 45%,#0e1020 100%);' + COSMOS_VARS)}>
      <Stars v={v} />
      <div style={css('position:relative')}>
        <div style={css('display:flex;align-items:flex-end;justify-content:space-between')}>
          <div>
            <div style={css('font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:#b5abfc')}>Pack · installed</div>
            <div style={css('margin-top:6px;font-size:27px;font-weight:500')}>Cosmos</div>
          </div>
          <div onClick={v.goCosmosBirth} style={css('padding:6px 11px;border-radius:20px;border:1px solid #5d5294;font-size:10.5px;color:#e7e5fe;cursor:pointer;flex:none')}><i className="ph ph-gear" style={css('margin-right:5px')}></i>Birth data</div>
        </div>
        <div style={css('margin-top:11px;font-size:13px;line-height:1.55;color:#b2b6ca')}>{v.chartLine}</div>

        <div style={css('margin-top:16px;display:flex;gap:7px;overflow-x:auto;padding-bottom:2px')}>
          {v.cosmosTabs.map((tb, i) => (
            <div key={i} onClick={tb.go} style={css('flex:none;padding:8px 13px;border-radius:20px;border:1px solid ' + tb.border + ';background:' + tb.bg + ';font-size:11.5px;color:' + tb.fg + ';cursor:pointer')}>{tb.label}</div>
          ))}
        </div>

        <div style={css('margin-top:14px;padding:18px;border-radius:17px;background:linear-gradient(165deg,rgba(70,60,120,.55),rgba(35,37,50,.85));border:1px solid #423a6a')}>
          <div style={css('display:flex;align-items:center;gap:11px')}>
            <div style={css('width:38px;height:38px;border-radius:50%;border:1px solid #5d5294;display:flex;align-items:center;justify-content:center;flex:none')}><i className={'ph ' + v.csIcon} style={css('font-size:19px;color:#d2cefd')}></i></div>
            <div style={css('flex:1')}>
              <div style={css('font-size:14px;font-weight:500')}>{v.csTitle}</div>
              <div style={css('margin-top:3px;font-size:11px;color:#9397ab')}>{v.csMeta}</div>
            </div>
          </div>
          <div style={css('margin-top:14px;font-size:15px;line-height:1.6;color:#f5f4ff;text-wrap:pretty')}>{v.csRead}</div>
        </div>

        <div style={css('margin-top:10px;display:grid;grid-template-columns:1fr 1fr;gap:9px')}>
          {v.csPlacements.map((p, i) => (
            <div key={i} style={css('padding:14px;border-radius:13px;background:rgba(35,37,50,.8);border:1px solid rgba(233,233,237,.14)')}>
              <div style={css('font-size:9.5px;letter-spacing:.1em;text-transform:uppercase;color:#75798c')}>{p.label}</div>
              <div style={css('margin-top:7px;font-size:15px;font-weight:500;color:#e9e9ed')}>{p.value}</div>
              <div style={css('margin-top:4px;font-size:10.5px;line-height:1.45;color:#9397ab')}>{p.note}</div>
            </div>
          ))}
        </div>

        {v.csIsVedic && (
          <>
            <div style={css('margin-top:10px;padding:15px;border-radius:15px;background:rgba(35,37,50,.85);border:1px solid rgba(233,233,237,.14)')}>
              <div style={css('display:flex;align-items:center;gap:9px')}>
                <div style={css('flex:1')}>
                  <div style={css('font-size:12.5px;font-weight:500;color:#e9e9ed')}>{v.kundliTitle}</div>
                  <div style={css('margin-top:3px;font-size:10px;color:#75798c')}>{v.kundliMeta}</div>
                </div>
                <div style={css('display:flex;gap:4px;padding:3px;border-radius:9px;background:#292b31')}>
                  {v.vargaTabs.map((vt, i) => (
                    <div key={i} onClick={vt.go} style={css('padding:6px 11px;border-radius:7px;font-size:10.5px;cursor:pointer;background:' + vt.bg + ';color:' + vt.fg)}>{vt.label}</div>
                  ))}
                </div>
              </div>

              <div style={css('margin-top:13px;position:relative;width:100%;padding-bottom:100%;border:1px solid #5d5294;border-radius:4px;background:linear-gradient(150deg,rgba(66,58,106,.35),rgba(22,24,38,.6))')}>
                <div style={css('position:absolute;top:50%;left:-20.7%;width:141.4%;height:1px;background:#4b4470;transform:rotate(45deg)')}></div>
                <div style={css('position:absolute;top:50%;left:-20.7%;width:141.4%;height:1px;background:#4b4470;transform:rotate(-45deg)')}></div>
                <div style={css('position:absolute;left:14.6%;top:14.6%;width:70.7%;height:70.7%;border:1px solid #4b4470;transform:rotate(45deg)')}></div>
                {v.kundliHouses.map((h, i) => (
                  <div key={i} style={css('position:absolute;left:' + h.left + ';top:' + h.top + ';transform:translate(-50%,-50%);width:23%;text-align:center')}>
                    <div style={css('font-size:8.5px;font-family:ui-monospace,Menlo,monospace;color:' + h.numFg)}>{h.num}</div>
                    <div style={css('margin-top:2px;font-size:10px;line-height:1.35;font-weight:500;color:' + h.fg)}>{h.planets}</div>
                  </div>
                ))}
              </div>
              <div style={css('margin-top:11px;display:flex;gap:7px;flex-wrap:wrap')}>
                {v.kundliLegend.map((l, i) => (
                  <div key={i} style={css('padding:4px 8px;border-radius:6px;background:#292b31;font-size:9.5px;color:#9397ab')}>{l}</div>
                ))}
              </div>
              <div style={css('margin-top:11px;padding-top:11px;border-top:1px solid rgba(233,233,237,.12);font-size:11.5px;line-height:1.55;color:#b2b6ca;text-wrap:pretty')}>{v.kundliNote}</div>
            </div>

            <div style={css('margin-top:10px;padding:6px 15px 12px;border-radius:15px;background:rgba(35,37,50,.85);border:1px solid rgba(233,233,237,.14)')}>
              <div style={css('padding:12px 0 4px;font-size:12.5px;font-weight:500;color:#e9e9ed')}>Graha positions</div>
              <div style={css('display:flex;gap:8px;padding:6px 0;border-bottom:1px solid rgba(233,233,237,.12);font-size:8.5px;letter-spacing:.1em;text-transform:uppercase;color:#75798c')}>
                <div style={css('width:52px;flex:none')}>Graha</div>
                <div style={css('width:62px;flex:none')}>Rāśi</div>
                <div style={css('flex:1')}>Nakṣatra</div>
                <div style={css('width:26px;flex:none;text-align:right')}>Bh</div>
              </div>
              {v.grahaRows.map((g, i) => (
                <div key={i} style={css('display:flex;gap:8px;align-items:center;padding:9px 0;border-bottom:1px solid rgba(233,233,237,.08)')}>
                  <div style={css('width:52px;flex:none')}>
                    <div style={css('font-size:11.5px;color:#e9e9ed')}>{g.name}</div>
                    <div style={css('margin-top:2px;font-size:9px;color:' + g.stateFg)}>{g.state}</div>
                  </div>
                  <div style={css('width:62px;flex:none')}>
                    <div style={css('font-size:11px;color:#cfd3e5')}>{g.rashi}</div>
                    <div style={css('margin-top:2px;font-size:9px;font-family:ui-monospace,Menlo,monospace;color:#75798c')}>{g.deg}</div>
                  </div>
                  <div style={css('flex:1')}>
                    <div style={css('font-size:11px;color:#b2b6ca')}>{g.nak}</div>
                    <div style={css('margin-top:2px;font-size:9px;color:#75798c')}>pada {g.pada}</div>
                  </div>
                  <div style={css('width:26px;flex:none;text-align:right;font-size:11.5px;font-family:ui-monospace,Menlo,monospace;color:#b5abfc')}>{g.house}</div>
                </div>
              ))}
            </div>

            <div style={css('margin-top:10px;padding:15px;border-radius:15px;background:rgba(35,37,50,.85);border:1px solid rgba(233,233,237,.14)')}>
              <div style={css('display:flex;align-items:baseline;justify-content:space-between')}>
                <div style={css('font-size:12.5px;font-weight:500;color:#e9e9ed')}>Vimśottarī daśā</div>
                <div style={css('font-size:9.5px;color:#75798c')}>120-year cycle · Moon-based</div>
              </div>
              <div style={css('margin-top:13px;display:flex;flex-direction:column;gap:9px')}>
                {v.dashaRows.map((d, i) => (
                  <div key={i} style={css('display:flex;gap:11px;align-items:flex-start')}>
                    <div style={css('width:64px;flex:none')}>
                      <div style={css('font-size:11.5px;color:' + d.fg)}>{d.lord}</div>
                      <div style={css('margin-top:2px;font-size:9px;font-family:ui-monospace,Menlo,monospace;color:#75798c')}>{d.span}</div>
                    </div>
                    <div style={css('flex:1')}>
                      <div style={css('height:5px;border-radius:3px;background:#292b31;overflow:hidden')}><div style={css('height:100%;width:' + d.pct + ';background:' + d.bg)}></div></div>
                      <div style={css('margin-top:6px;font-size:10.5px;line-height:1.5;color:#9397ab')}>{d.note}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div style={css('margin-top:12px;padding:11px 12px;border-radius:11px;background:#2b2741;border:1px solid #423a6a;font-size:11.5px;line-height:1.55;color:#d2cefd')}>{v.dashaNow}</div>
            </div>

            <div style={css('margin-top:10px;display:grid;grid-template-columns:1fr 1fr;gap:9px')}>
              {v.doshaCards.map((d, i) => (
                <div key={i} style={css('padding:13px;border-radius:13px;background:rgba(35,37,50,.85);border:1px solid ' + d.border)}>
                  <div style={css('display:flex;align-items:center;gap:7px')}>
                    <i className={'ph ' + d.icon} style={css('font-size:14px;color:' + d.fg)}></i>
                    <div style={css('font-size:10.5px;color:#9397ab')}>{d.name}</div>
                  </div>
                  <div style={css('margin-top:8px;font-size:13px;font-weight:500;color:' + d.fg)}>{d.verdict}</div>
                  <div style={css('margin-top:4px;font-size:10px;line-height:1.45;color:#75798c')}>{d.note}</div>
                </div>
              ))}
            </div>

            <div style={css('margin-top:10px;padding:6px 15px 12px;border-radius:15px;background:rgba(35,37,50,.85);border:1px solid rgba(233,233,237,.14)')}>
              <div style={css('padding:12px 0 2px;font-size:12.5px;font-weight:500;color:#e9e9ed')}>Yogas in your chart</div>
              {v.yogaRows.map((y, i) => (
                <div key={i} style={css('display:flex;gap:11px;align-items:flex-start;padding:11px 0;border-top:1px solid rgba(233,233,237,.1)')}>
                  <i className={'ph ' + y.icon} style={css('font-size:15px;color:' + y.fg + ';margin-top:2px')}></i>
                  <div style={css('flex:1')}>
                    <div style={css('display:flex;align-items:baseline;gap:7px')}>
                      <div style={css('font-size:12px;font-weight:500;color:#e9e9ed')}>{y.name}</div>
                      <div style={css('font-size:9px;letter-spacing:.06em;text-transform:uppercase;color:' + y.fg)}>{y.status}</div>
                    </div>
                    <div style={css('margin-top:4px;font-size:11px;line-height:1.5;color:#9397ab;text-wrap:pretty')}>{y.body}</div>
                  </div>
                </div>
              ))}
            </div>

            <div style={css('margin-top:10px;padding:15px;border-radius:15px;background:rgba(35,37,50,.85);border:1px solid rgba(233,233,237,.14)')}>
              <div style={css('font-size:12.5px;font-weight:500;color:#e9e9ed')}>Aṣṭakavarga · strength by house</div>
              <div style={css('margin-top:5px;font-size:10.5px;color:#75798c')}>Sarvāṣṭakavarga bindus. Above 28 is a supported house; below 25 asks for patience.</div>
              <div style={css('margin-top:14px;display:flex;align-items:flex-end;gap:4px;height:78px')}>
                {v.avBars.map((a, i) => (
                  <div key={i} style={css('flex:1;display:flex;flex-direction:column;align-items:center;gap:5px')}>
                    <div style={css('font-size:8px;font-family:ui-monospace,Menlo,monospace;color:' + a.fg)}>{a.v}</div>
                    <div style={css('width:100%;border-radius:3px 3px 1px 1px;height:' + a.h + 'px;background:' + a.bg)}></div>
                    <div style={css('font-size:8px;color:#595d6c')}>{a.h_label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={css('margin-top:10px;padding:15px;border-radius:15px;background:rgba(35,37,50,.85);border:1px solid rgba(233,233,237,.14)')}>
              <div style={css('display:flex;align-items:baseline;justify-content:space-between')}>
                <div style={css('font-size:12.5px;font-weight:500;color:#e9e9ed')}>Today&apos;s pañcāṅga</div>
                <div style={css('font-size:9.5px;color:#75798c')}>{v.panchangPlace}</div>
              </div>
              <div style={css('margin-top:12px;display:grid;grid-template-columns:1fr 1fr;gap:9px')}>
                {v.panchang.map((p, i) => (
                  <div key={i} style={css('padding:11px;border-radius:11px;background:#292b31')}>
                    <div style={css('font-size:9px;letter-spacing:.1em;text-transform:uppercase;color:#75798c')}>{p.label}</div>
                    <div style={css('margin-top:5px;font-size:12.5px;color:#e9e9ed')}>{p.value}</div>
                  </div>
                ))}
              </div>
              <div style={css('margin-top:11px;padding:11px 12px;border-radius:11px;background:#2b2741;border:1px solid #423a6a;font-size:11.5px;line-height:1.55;color:#d2cefd')}>{v.muhurta}</div>
            </div>
          </>
        )}

        {v.csHasRows && (
          <div style={css('margin-top:10px;padding:6px 15px 10px;border-radius:15px;background:rgba(35,37,50,.8);border:1px solid rgba(233,233,237,.14)')}>
            {v.csRows.map((r, i) => (
              <div key={i} style={css('display:flex;gap:11px;align-items:flex-start;padding:12px 0;border-top:1px solid rgba(233,233,237,.12)')}>
                <i className={'ph ' + r.icon} style={css('font-size:16px;color:#b5abfc;margin-top:2px')}></i>
                <div style={css('flex:1')}>
                  <div style={css('font-size:12.5px;font-weight:500;color:#e9e9ed')}>{r.title}</div>
                  <div style={css('margin-top:4px;font-size:11.5px;line-height:1.5;color:#9397ab;text-wrap:pretty')}>{r.body}</div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div style={css('margin-top:10px;padding:17px;border-radius:15px;background:#2b2741;border:1px solid #423a6a')}>
          <div style={css('font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:#d2cefd')}>Where the systems agree</div>
          <div style={css('margin-top:11px;font-size:14.5px;line-height:1.6;color:#f5f4ff;text-wrap:pretty')}>{v.csAgree}</div>
          <div style={css('margin-top:12px;display:flex;flex-direction:column;gap:8px')}>
            {v.csConsensus.map((c, i) => (
              <div key={i} style={css('display:flex;align-items:center;gap:9px')}>
                <div style={css('width:64px;flex:none;font-size:10.5px;color:#b2b6ca')}>{c.name}</div>
                <div style={css('flex:1;height:5px;border-radius:3px;background:#292b31;overflow:hidden')}><div style={css('height:100%;width:' + c.pct + ';background:#968ae0')}></div></div>
                <div style={css('font-size:9.5px;color:#75798c;flex:none')}>{c.verdict}</div>
              </div>
            ))}
          </div>
          <div style={css('margin-top:13px;padding-top:12px;border-top:1px solid #423a6a;font-size:11.5px;line-height:1.55;color:#b5abfc')}>{v.csConflict}</div>
        </div>

        <div style={css('margin-top:10px;padding:15px;border-radius:15px;background:rgba(35,37,50,.8);border:1px solid rgba(233,233,237,.14)')}>
          <div style={css('font-size:9.5px;letter-spacing:.14em;text-transform:uppercase;color:#75798c')}>Grounded in your real week</div>
          <div style={css('margin-top:10px;display:flex;flex-direction:column;gap:7px')}>
            {v.cosmosEvidence.map((c, i) => (
              <div key={i} style={css('display:flex;gap:9px;font-size:11.5px;line-height:1.5;color:#b2b6ca')}><i className="ph ph-waveform" style={css('font-size:12px;color:#968ae0;margin-top:2px')}></i><span>{c}</span></div>
            ))}
          </div>
        </div>

        <div onClick={v.goTarot} style={css('margin-top:10px;padding:16px;border-radius:15px;background:linear-gradient(160deg,rgba(70,60,120,.5),rgba(35,37,50,.85));border:1px solid #423a6a;display:flex;align-items:center;gap:13px;cursor:pointer')}>
          <div style={css('width:34px;height:48px;border-radius:5px;border:1px solid #796cbf;background:linear-gradient(160deg,#3a3364,#221f38);display:flex;align-items:center;justify-content:center;flex:none')}><i className="ph ph-star-four" style={css('font-size:15px;color:#d2cefd')}></i></div>
          <div style={css('flex:1')}>
            <div style={css('font-size:14px;font-weight:500')}>Today&rsquo;s card is waiting</div>
            <div style={css('margin-top:4px;font-size:11.5px;color:#9397ab')}>One card daily, or ask a question and draw three.</div>
          </div>
          <i className="ph ph-caret-right" style={css('font-size:14px;color:#595d6c')}></i>
        </div>
        <div style={css('margin-top:12px;padding:13px 14px;border-radius:12px;border:1px dashed #3f424d;font-size:11px;line-height:1.5;color:#75798c')}><i className="ph ph-info" style={css('margin-right:6px')}></i>Interpretive, not predictive. Cosmos reads your calendar and your sessions — never your health, money or messages.</div>
      </div>
    </div>
  );
}

export function Tarot({ v }) {
  if (!v.sc.tarot) return null;
  return (
    <div style={css('min-height:874px;padding:58px 16px 40px;position:relative;overflow:hidden;background:radial-gradient(120% 44% at 50% 2%,#332c5c 0%,#171a2e 48%,#0e1020 100%);' + COSMOS_VARS)}>
      <Stars v={v} />
      <div style={css('position:relative')}>
        <div style={css('display:flex;align-items:center;gap:10px')}>
          <div onClick={v.goCosmos} style={css('width:34px;height:34px;border-radius:11px;border:1px solid #3f424d;display:flex;align-items:center;justify-content:center;cursor:pointer;flex:none')}><i className="ph ph-caret-left" style={css('font-size:15px;color:#cfd3e5')}></i></div>
          <div style={css('flex:1;font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:#75798c')}>Cosmos · tarot</div>
          <div style={css('font-size:10.5px;color:#75798c')}>{v.tarotDate}</div>
        </div>

        <div style={css('margin-top:18px;font-size:26px;font-weight:500;line-height:1.22')}>{v.tarotTitle}</div>
        <div style={css('margin-top:10px;font-size:13px;line-height:1.6;color:#b2b6ca')}>{v.tarotLead}</div>

        <div style={css('margin-top:18px;display:flex;gap:5px;padding:3px;border-radius:11px;background:rgba(41,43,49,.9);border:1px solid rgba(233,233,237,.14)')}>
          {v.tarotModes.map((m, i) => (
            <div key={i} onClick={m.go} style={css('flex:1;text-align:center;padding:8px 0;border-radius:9px;font-size:11.5px;cursor:pointer;background:' + m.bg + ';color:' + m.fg)}>{m.label}</div>
          ))}
        </div>

        {v.tarotAsking && (
          <div style={css('margin-top:14px;display:flex;gap:9px;align-items:center;padding:12px 14px;border-radius:14px;background:#232532;border:1px solid #3f424d')}>
            <i className="ph ph-question" style={css('font-size:16px;color:#b5abfc')}></i>
            <input value={v.tarotQ} onChange={v.setTarotQ} onKeyDown={v.onTarotKey} placeholder="Should I hold the price or take the order?" style={css('flex:1;background:transparent;border:none;outline:none;color:#e9e9ed;font-size:13.5px;font-family:inherit')} />
          </div>
        )}

        {v.tarotIsDaily && (
          <>
            <div style={css('margin-top:14px;text-align:center;font-size:12px;line-height:1.5;color:' + v.fanStatusFg + ';transition:color .4s ease')}>{v.fanStatus}</div>
            <div style={css('margin-top:8px;position:relative;height:250px')}>
              {v.fanCards.map((c, i) => (
                <div key={i} onClick={c.pick} style={css('position:absolute;left:50%;bottom:14px;width:98px;height:152px;margin-left:-49px;cursor:pointer;perspective:900px;z-index:' + c.z + ';opacity:' + c.op + ';transform:' + c.tf + ';transform-origin:50% 130%;transition:transform .62s cubic-bezier(.2,.8,.2,1),opacity .45s ease')}>
                  <div style={css('position:relative;width:100%;height:100%;transform-style:preserve-3d;transform:' + c.flip + ';transition:transform .8s cubic-bezier(.4,0,.2,1)')}>
                    <div style={css('position:absolute;inset:0;backface-visibility:hidden;-webkit-backface-visibility:hidden;border-radius:11px;border:1px solid #5d5294;background:linear-gradient(155deg,#332c5c,#1c1b2e);box-shadow:0 12px 26px rgba(0,0,0,.5);display:flex;align-items:center;justify-content:center')}>
                      <div style={css('width:56px;height:110px;border-radius:6px;border:1px solid rgba(145,132,217,.35);display:flex;align-items:center;justify-content:center')}>
                        <i className="ph ph-star-four" style={css('font-size:20px;color:#796cbf;animation:twinkle ' + c.tw + ' ease-in-out infinite')}></i>
                      </div>
                    </div>
                    <div style={css('position:absolute;inset:0;backface-visibility:hidden;-webkit-backface-visibility:hidden;transform:rotateY(180deg);border-radius:11px;border:1px solid #9184d9;background:linear-gradient(160deg,#3f3670,#221f38);box-shadow:0 16px 34px rgba(0,0,0,.6),0 0 26px rgba(145,132,217,.22);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:12px;text-align:center')}>
                      <i className={'ph ' + v.dailyIcon} style={css('font-size:19px;color:#d2cefd')}></i>
                      <div style={css('margin-top:10px;font-size:14.5px;font-weight:500;line-height:1.25;color:#f5f4ff')}>{v.dailyName}</div>
                      <div style={css('margin-top:6px;font-size:9.5px;letter-spacing:.06em;text-transform:uppercase;color:#b5abfc')}>{v.dailyOrient}</div>
                      <div style={css('margin-top:9px;width:22px;height:1px;background:#5d5294')}></div>
                      <div style={css('margin-top:9px;font-size:10.5px;line-height:1.4;color:#b2b6ca')}>{v.dailyKey}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {v.dailyHeld && (
              <div onClick={v.revealCard} style={css('height:52px;border-radius:14px;border:1px solid #9184d9;background:#2b2741;display:flex;align-items:center;justify-content:center;gap:9px;font-size:15px;color:#f5f4ff;cursor:pointer;animation:breathe 2.4s ease-in-out infinite')}><i className="ph ph-hand-tap" style={css('font-size:18px')}></i>Turn it over</div>
            )}
            <div style={css('margin-top:9px;display:flex;gap:9px')}>
              <div onClick={v.shuffleDeck} style={css('flex:1;height:46px;border-radius:13px;border:1px solid ' + v.shuffleBorder + ';display:flex;align-items:center;justify-content:center;gap:8px;font-size:13px;color:' + v.shuffleFg + ';cursor:pointer')}><i className="ph ph-shuffle" style={css('font-size:15px')}></i>{v.shuffleLabel}</div>
            </div>
          </>
        )}

        {v.tarotIsAsk && (
          <div style={css('margin-top:20px;display:flex;gap:10px;justify-content:center')}>
            {v.tarotCards.map((c, i) => (
              <div key={i} onClick={c.flip} style={css('flex:1;max-width:112px;cursor:pointer;perspective:900px')}>
                <div style={css('position:relative;height:170px;transform-style:preserve-3d;transform:' + c.flip3d + ';transition:transform .8s cubic-bezier(.4,0,.2,1)')}>
                  <div style={css('position:absolute;inset:0;backface-visibility:hidden;-webkit-backface-visibility:hidden;border-radius:11px;border:1px solid #3f424d;background:linear-gradient(155deg,#2a2743,#1a1b2c);display:flex;flex-direction:column;align-items:center;justify-content:center')}>
                    <i className="ph ph-star-four" style={css('font-size:22px;color:#796cbf')}></i>
                    <div style={css('margin-top:9px;font-size:9.5px;letter-spacing:.1em;text-transform:uppercase;color:#595d6c')}>Tap</div>
                  </div>
                  <div style={css('position:absolute;inset:0;backface-visibility:hidden;-webkit-backface-visibility:hidden;transform:rotateY(180deg);border-radius:11px;border:1px solid #796cbf;background:linear-gradient(160deg,#3a3364,#221f38);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:11px;text-align:center')}>
                    <div style={css('font-size:9px;letter-spacing:.1em;text-transform:uppercase;color:#b5abfc')}>{c.slot}</div>
                    <div style={css('margin-top:9px;font-size:14px;font-weight:500;line-height:1.3;color:#f5f4ff')}>{c.name}</div>
                    <div style={css('margin-top:7px;font-size:9.5px;color:#9397ab')}>{c.orient}</div>
                    <div style={css('margin-top:9px;width:22px;height:1px;background:#5d5294')}></div>
                    <div style={css('margin-top:9px;font-size:10.5px;line-height:1.4;color:#b2b6ca')}>{c.key}</div>
                  </div>
                </div>
                <div style={css('margin-top:7px;text-align:center;font-size:9.5px;color:#75798c')}>{c.slotLabel}</div>
              </div>
            ))}
          </div>
        )}

        {v.tarotHasRead && (
          <>
            <div style={css('margin-top:18px;display:flex;flex-direction:column;gap:10px')}>
              {v.tarotReads.map((r, i) => (
                <div key={i} style={css('padding:16px;border-radius:15px;background:rgba(35,37,50,.85);border:1px solid rgba(233,233,237,.14);animation:fadeUp .4s ease both')}>
                  <div style={css('display:flex;align-items:center;gap:9px')}>
                    <div style={css('font-size:9.5px;letter-spacing:.12em;text-transform:uppercase;color:#b5abfc')}>{r.slot}</div>
                    <div style={css('flex:1;height:1px;background:rgba(233,233,237,.12)')}></div>
                    <div style={css('font-size:11px;color:#cfd3e5')}>{r.name}</div>
                  </div>
                  <div style={css('margin-top:11px;font-size:14px;line-height:1.6;color:#e9e9ed;text-wrap:pretty')}>{r.read}</div>
                  <div style={css('margin-top:11px;padding:10px 11px;border-radius:10px;background:#292b31;font-size:11px;line-height:1.5;color:#b2b6ca')}><i className="ph ph-waveform" style={css('margin-right:6px;color:#968ae0')}></i>{r.tie}</div>
                </div>
              ))}
            </div>
            <div onClick={v.tarotSave} style={css('margin-top:12px;height:48px;border-radius:13px;border:1px solid #9184d9;display:flex;align-items:center;justify-content:center;gap:8px;font-size:13.5px;color:#e7e5fe;cursor:pointer')}><i className="ph ph-notebook" style={css('font-size:16px')}></i>Keep this in my journal</div>
          </>
        )}

        <div onClick={v.tarotReset} style={css('margin-top:11px;text-align:center;font-size:11px;color:#75798c;cursor:pointer')}>{v.tarotResetLabel}</div>
        <div style={css('margin-top:14px;font-size:10.5px;line-height:1.55;color:#595d6c;text-align:center')}>A card is a mirror, not a forecast. I read it against your week so it stays useful.</div>
      </div>
    </div>
  );
}
