import placeholder from "../../../assets/icons/project-placeholder.png";
import team1 from "../../../assets/icons/team-1.jpg";
import team2 from "../../../assets/icons/team-2.jpg";
import team3 from "../../../assets/icons/team-3.jpg";
import team4 from "../../../assets/icons/team-4.jpg";

const SupervisorDashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <div className='w-full px-6 mx-auto'>
        <div className='flex flex-wrap -mx-3'>
          <div className='w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4'>
            <div className='relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border'>
              <div className='flex-auto p-4'>
                <div className='flex flex-row -mx-3'>
                  <div className='flex-none w-2/3 max-w-full px-3'>
                    <div>
                      <p className='mb-0 font-sans font-semibold leading-normal text-sm'>Total Projects</p>
                      <h5 className='mb-0 font-bold'>53</h5>
                    </div>
                  </div>
                  <div className='px-3 text-right basis-1/3'>
                    <div className='inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-blue-600 to-cyan-400'>
                      <i
                        className='fa fa-file-code-o fa-lg leading-none relative top-3 text-white'
                        aria-hidden='true'
                      ></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4'>
            <div className='relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border'>
              <div className='flex-auto p-4'>
                <div className='flex flex-row -mx-3'>
                  <div className='flex-none w-2/3 max-w-full px-3'>
                    <div>
                      <p className='mb-0 font-sans font-semibold leading-normal text-sm'>Total Students</p>
                      <h5 className='mb-0 font-bold'>23</h5>
                    </div>
                  </div>
                  <div className='px-3 text-right basis-1/3'>
                    <div className='inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-blue-600 to-cyan-400'>
                      <i
                        className='fa fa-graduation-cap fa-lg leading-none relative top-3 text-white'
                        aria-hidden='true'
                      ></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4'>
            <div className='relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border'>
              <div className='flex-auto p-4'>
                <div className='flex flex-row -mx-3'>
                  <div className='flex-none w-2/3 max-w-full px-3'>
                    <div>
                      <p className='mb-0 font-sans font-semibold leading-normal text-sm'>New Clients</p>
                      <h5 className='mb-0 font-bold'>
                        +3,462
                        <span className='leading-normal text-red-600 text-sm font-weight-bolder'>-2%</span>
                      </h5>
                    </div>
                  </div>
                  <div className='px-3 text-right basis-1/3'>
                    <div className='inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-blue-600 to-cyan-400'>
                      <i className='ni leading-none ni-paper-diploma text-lg relative top-3.5 text-white'></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='w-full max-w-full px-3 sm:w-1/2 sm:flex-none xl:w-1/4'>
            <div className='relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border'>
              <div className='flex-auto p-4'>
                <div className='flex flex-row -mx-3'>
                  <div className='flex-none w-2/3 max-w-full px-3'>
                    <div>
                      <p className='mb-0 font-sans font-semibold leading-normal text-sm'>Sales</p>
                      <h5 className='mb-0 font-bold'>
                        $103,430
                        <span className='leading-normal text-sm font-weight-bolder text-lime-500'>+5%</span>
                      </h5>
                    </div>
                  </div>
                  <div className='px-3 text-right basis-1/3'>
                    <div className='inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-blue-600 to-cyan-400'>
                      <i className='ni leading-none ni-cart text-lg relative top-3.5 text-white'></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='flex flex-wrap my-6 -mx-3'>
          <div className='w-full max-w-full px-3 mt-0 mb-6 md:mb-0 md:w-1/2 md:flex-none lg:w-full lg:flex-none'>
            <div className='border-black/12.5 shadow-soft-xl relative flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border'>
              <div className='border-black/12.5 mb-0 rounded-t-2xl border-b-0 border-solid bg-white p-6 pb-0'>
                <div className='flex flex-wrap mt-0 -mx-3'>
                  <div className='flex-none w-7/12 max-w-full px-3 mt-0 lg:w-1/2 lg:flex-none'>
                    <h6>Projects</h6>
                    <p className='mb-0 leading-normal text-sm'>
                      <i className='fa fa-check text-cyan-500'></i>
                      <span className='ml-1 font-semibold'>30 done</span>
                      this month
                    </p>
                  </div>
                  <div className='flex-none w-5/12 max-w-full px-3 my-auto text-right lg:w-1/2 lg:flex-none'>
                    <div className='relative pr-6 lg:float-right'>
                      <a className='cursor-pointer' aria-expanded='false'>
                        <i className='fa fa-ellipsis-v text-slate-400'></i>
                      </a>
                      <p className='hidden transform-dropdown-show'></p>

                      <ul className="z-100 text-sm transform-dropdown shadow-soft-3xl duration-250 before:duration-350 before:font-awesome before:ease-soft min-w-44 -ml-34 before:text-5.5 pointer-events-none absolute top-0 m-0 mt-2 list-none rounded-lg border-0 border-solid border-transparent bg-white bg-clip-padding px-2 py-4 text-left text-slate-500 opacity-0 transition-all before:absolute before:top-0 before:right-7 before:left-auto before:z-40 before:text-white before:transition-all before:content-['\f0d8']">
                        <li className='relative'>
                          <a
                            className='py-1.2 lg:ease-soft clear-both block w-full whitespace-nowrap rounded-lg border-0 bg-transparent px-4 text-left font-normal text-slate-500 lg:transition-colors lg:duration-300'
                            href='#/'
                          >
                            Action
                          </a>
                        </li>
                        <li className='relative'>
                          <a
                            className='py-1.2 lg:ease-soft clear-both block w-full whitespace-nowrap rounded-lg border-0 bg-transparent px-4 text-left font-normal text-slate-500 lg:transition-colors lg:duration-300'
                            href='#/'
                          >
                            Another action
                          </a>
                        </li>
                        <li className='relative'>
                          <a
                            className='py-1.2 lg:ease-soft clear-both block w-full whitespace-nowrap rounded-lg border-0 bg-transparent px-4 text-left font-normal text-slate-500 lg:transition-colors lg:duration-300'
                            href='#/'
                          >
                            Something else here
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex-auto p-6 px-0 pb-2'>
                <div className='overflow-y-auto max-h-96'>
                  <table className='items-center w-full mb-0 align-top border-gray-200 text-slate-500'>
                    <thead className='align-bottom'>
                      <tr>
                        <th className='px-6 py-3 font-bold tracking-normal text-left uppercase align-middle bg-transparent border-b letter border-b-solid text-xxs whitespace-nowrap border-b-gray-200 text-slate-400 opacity-70'>
                          Companies
                        </th>
                        <th className='px-6 py-3 pl-2 font-bold tracking-normal text-left uppercase align-middle bg-transparent border-b letter border-b-solid text-xxs whitespace-nowrap border-b-gray-200 text-slate-400 opacity-70'>
                          Members
                        </th>
                        <th className='px-6 py-3 font-bold tracking-normal text-center uppercase align-middle bg-transparent border-b letter border-b-solid text-xxs whitespace-nowrap border-b-gray-200 text-slate-400 opacity-70'>
                          Budget
                        </th>
                        <th className='px-6 py-3 font-bold tracking-normal text-center uppercase align-middle bg-transparent border-b letter border-b-solid text-xxs whitespace-nowrap border-b-gray-200 text-slate-400 opacity-70'>
                          Completion
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className='p-2 align-middle bg-transparent border-b whitespace-nowrap'>
                          <div className='flex px-2 py-1'>
                            <div>
                              <img
                                src={placeholder}
                                className='inline-flex items-center justify-center mr-4 text-white transition-all duration-200 ease-soft-in-out text-sm h-9 w-9 rounded-xl'
                                alt='xd'
                              />
                            </div>
                            <div className='flex flex-col justify-center'>
                              <h6 className='mb-0 leading-normal text-sm'>Soft UI XD Version</h6>
                            </div>
                          </div>
                        </td>
                        <td className='p-2 align-middle bg-transparent border-b whitespace-nowrap'>
                          <div className='mt-2 avatar-group'>
                            <a
                              href='#/'
                              className='relative z-20 inline-flex items-center justify-center w-6 h-6 text-white transition-all duration-200 border-2 border-white border-solid rounded-full ease-soft-in-out text-xs hover:z-30'
                              data-target='tooltip_trigger'
                              data-placement='bottom'
                            >
                              <img src={team1} className='w-full rounded-full' alt='team1' />
                            </a>
                            <div
                              data-target='tooltip'
                              className='hidden px-2 py-1 text-white bg-black rounded-lg text-sm'
                              role='tooltip'
                            >
                              Ryan Tompson
                              <div
                                className="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']"
                                data-popper-arrow
                              ></div>
                            </div>
                            <a
                              href='#/'
                              className='relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-4 text-white transition-all duration-200 border-2 border-white border-solid rounded-full ease-soft-in-out text-xs hover:z-30'
                              data-target='tooltip_trigger'
                              data-placement='bottom'
                            >
                              <img src={team2} className='w-full rounded-full' alt='team2' />
                            </a>
                            <div
                              data-target='tooltip'
                              className='hidden px-2 py-1 text-white bg-black rounded-lg text-sm'
                              role='tooltip'
                            >
                              Romina Hadid
                              <div
                                className="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']"
                                data-popper-arrow
                              ></div>
                            </div>
                            <a
                              href='#/'
                              className='relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-4 text-white transition-all duration-200 border-2 border-white border-solid rounded-full ease-soft-in-out text-xs hover:z-30'
                              data-target='tooltip_trigger'
                              data-placement='bottom'
                            >
                              <img src={team3} className='w-full rounded-full' alt='team3' />
                            </a>
                            <div
                              data-target='tooltip'
                              className='hidden px-2 py-1 text-white bg-black rounded-lg text-sm'
                              role='tooltip'
                            >
                              Alexander Smith
                              <div
                                className="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']"
                                data-popper-arrow
                              ></div>
                            </div>
                            <a
                              href='#/'
                              className='relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-4 text-white transition-all duration-200 border-2 border-white border-solid rounded-full ease-soft-in-out text-xs hover:z-30'
                              data-target='tooltip_trigger'
                              data-placement='bottom'
                            >
                              <img src={team4} className='w-full rounded-full' alt='team4' />
                            </a>
                            <div
                              data-target='tooltip'
                              className='hidden px-2 py-1 text-white bg-black rounded-lg text-sm'
                              role='tooltip'
                            >
                              Jessica Doe
                              <div
                                className="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']"
                                data-popper-arrow
                              ></div>
                            </div>
                          </div>
                        </td>
                        <td className='p-2 leading-normal text-center align-middle bg-transparent border-b text-sm whitespace-nowrap'>
                          <span className='font-semibold leading-tight text-xs'> $14,000 </span>
                        </td>
                        <td className='p-2 align-middle bg-transparent border-b whitespace-nowrap'>
                          <div className='w-3/4 mx-auto'>
                            <div>
                              <div>
                                <span className='font-semibold leading-tight text-xs'>60%</span>
                              </div>
                            </div>
                            <div className='text-xs h-0.75 w-30 m-0 flex overflow-visible rounded-lg bg-gray-200'>
                              <div
                                className='duration-600 ease-soft bg-gradient-to-tl from-blue-600 to-cyan-400 -mt-0.38 -ml-px flex h-1.5 w-3/5 flex-col justify-center overflow-hidden whitespace-nowrap rounded bg-fuchsia-500 text-center text-white transition-all'
                                role='progressbar'
                                aria-valuenow='60'
                                aria-valuemin='0'
                                aria-valuemax='100'
                              ></div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className='p-2 align-middle bg-transparent border-b whitespace-nowrap'>
                          <div className='flex px-2 py-1'>
                            <div>
                              <img
                                src='../assets/img/small-logos/logo-atlassian.svg'
                                className='inline-flex items-center justify-center mr-4 text-white transition-all duration-200 ease-soft-in-out text-sm h-9 w-9 rounded-xl'
                                alt='atlassian'
                              />
                            </div>
                            <div className='flex flex-col justify-center'>
                              <h6 className='mb-0 leading-normal text-sm'>Add Progress Track</h6>
                            </div>
                          </div>
                        </td>
                        <td className='p-2 align-middle bg-transparent border-b whitespace-nowrap'>
                          <div className='mt-2 avatar-group'>
                            <a
                              href='#/'
                              className='relative z-20 inline-flex items-center justify-center w-6 h-6 text-white transition-all duration-200 border-2 border-white border-solid rounded-full ease-soft-in-out text-xs hover:z-30'
                              data-target='tooltip_trigger'
                              data-placement='bottom'
                            >
                              <img
                                src='../assets/img/team-2.jpg'
                                className='w-full rounded-full'
                                alt='team5'
                              />
                            </a>
                            <div
                              data-target='tooltip'
                              className='hidden px-2 py-1 text-white bg-black rounded-lg text-sm'
                              role='tooltip'
                            >
                              Romina Hadid
                              <div
                                className="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']"
                                data-popper-arrow
                              ></div>
                            </div>
                            <a
                              href='#/'
                              className='relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-4 text-white transition-all duration-200 border-2 border-white border-solid rounded-full ease-soft-in-out text-xs hover:z-30'
                              data-target='tooltip_trigger'
                              data-placement='bottom'
                            >
                              <img
                                src='../assets/img/team-4.jpg'
                                className='w-full rounded-full'
                                alt='team6'
                              />
                            </a>
                            <div
                              data-target='tooltip'
                              className='hidden px-2 py-1 text-white bg-black rounded-lg text-sm'
                              role='tooltip'
                            >
                              Jessica Doe
                              <div
                                className="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']"
                                data-popper-arrow
                              ></div>
                            </div>
                          </div>
                        </td>
                        <td className='p-2 leading-normal text-center align-middle bg-transparent border-b text-sm whitespace-nowrap'>
                          <span className='font-semibold leading-tight text-xs'> $3,000 </span>
                        </td>
                        <td className='p-2 align-middle bg-transparent border-b whitespace-nowrap'>
                          <div className='w-3/4 mx-auto'>
                            <div>
                              <div>
                                <span className='font-semibold leading-tight text-xs'>10%</span>
                              </div>
                            </div>
                            <div className='text-xs h-0.75 w-30 m-0 flex overflow-visible rounded-lg bg-gray-200'>
                              <div
                                className='duration-600 ease-soft bg-gradient-to-tl from-blue-600 to-cyan-400 -mt-0.38 w-1/10 -ml-px flex h-1.5 flex-col justify-center overflow-hidden whitespace-nowrap rounded bg-fuchsia-500 text-center text-white transition-all'
                                role='progressbar'
                                aria-valuenow='10'
                                aria-valuemin='0'
                                aria-valuemax='100'
                              ></div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className='p-2 align-middle bg-transparent border-b whitespace-nowrap'>
                          <div className='flex px-2 py-1'>
                            <div>
                              <img
                                src='../assets/img/small-logos/logo-slack.svg'
                                className='inline-flex items-center justify-center mr-4 text-white transition-all duration-200 ease-soft-in-out text-sm h-9 w-9 rounded-xl'
                                alt='team7'
                              />
                            </div>
                            <div className='flex flex-col justify-center'>
                              <h6 className='mb-0 leading-normal text-sm'>Fix Platform Errors</h6>
                            </div>
                          </div>
                        </td>
                        <td className='p-2 align-middle bg-transparent border-b whitespace-nowrap'>
                          <div className='mt-2 avatar-group'>
                            <a
                              href='#/'
                              className='relative z-20 inline-flex items-center justify-center w-6 h-6 text-white transition-all duration-200 border-2 border-white border-solid rounded-full ease-soft-in-out text-xs hover:z-30'
                              data-target='tooltip_trigger'
                              data-placement='bottom'
                            >
                              <img
                                src='../assets/img/team-3.jpg'
                                className='w-full rounded-full'
                                alt='team8'
                              />
                            </a>
                            <div
                              data-target='tooltip'
                              className='hidden px-2 py-1 text-white bg-black rounded-lg text-sm'
                              role='tooltip'
                            >
                              Romina Hadid
                              <div
                                className="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']"
                                data-popper-arrow
                              ></div>
                            </div>
                            <a
                              href='#/'
                              className='relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-4 text-white transition-all duration-200 border-2 border-white border-solid rounded-full ease-soft-in-out text-xs hover:z-30'
                              data-target='tooltip_trigger'
                              data-placement='bottom'
                            >
                              <img
                                src='../assets/img/team-1.jpg'
                                className='w-full rounded-full'
                                alt='team9'
                              />
                            </a>
                            <div
                              data-target='tooltip'
                              className='hidden px-2 py-1 text-white bg-black rounded-lg text-sm'
                              role='tooltip'
                            >
                              Jessica Doe
                              <div
                                className="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']"
                                data-popper-arrow
                              ></div>
                            </div>
                          </div>
                        </td>
                        <td className='p-2 leading-normal text-center align-middle bg-transparent border-b text-sm whitespace-nowrap'>
                          <span className='font-semibold leading-tight text-xs'> Not set </span>
                        </td>
                        <td className='p-2 align-middle bg-transparent border-b whitespace-nowrap'>
                          <div className='w-3/4 mx-auto'>
                            <div>
                              <div>
                                <span className='font-semibold leading-tight text-xs'>100%</span>
                              </div>
                            </div>
                            <div className='text-xs h-0.75 w-30 m-0 flex overflow-visible rounded-lg bg-gray-200'>
                              <div
                                className='duration-600 ease-soft bg-gradient-to-tl from-green-600 to-lime-400 -mt-0.38 -ml-px flex h-1.5 w-full flex-col justify-center overflow-hidden whitespace-nowrap rounded bg-fuchsia-500 text-center text-white transition-all'
                                role='progressbar'
                                aria-valuenow='100'
                                aria-valuemin='0'
                                aria-valuemax='100'
                              ></div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className='p-2 align-middle bg-transparent border-b whitespace-nowrap'>
                          <div className='flex px-2 py-1'>
                            <div>
                              <img
                                src='../assets/img/small-logos/logo-spotify.svg'
                                className='inline-flex items-center justify-center mr-4 text-white transition-all duration-200 ease-soft-in-out text-sm h-9 w-9 rounded-xl'
                                alt='spotify'
                              />
                            </div>
                            <div className='flex flex-col justify-center'>
                              <h6 className='mb-0 leading-normal text-sm'>Launch our Mobile App</h6>
                            </div>
                          </div>
                        </td>
                        <td className='p-2 align-middle bg-transparent border-b whitespace-nowrap'>
                          <div className='mt-2 avatar-group'>
                            <a
                              href='#/'
                              className='relative z-20 inline-flex items-center justify-center w-6 h-6 text-white transition-all duration-200 border-2 border-white border-solid rounded-full ease-soft-in-out text-xs hover:z-30'
                              data-target='tooltip_trigger'
                              data-placement='bottom'
                            >
                              <img
                                src='../assets/img/team-4.jpg'
                                className='w-full rounded-full'
                                alt='user1'
                              />
                            </a>
                            <div
                              data-target='tooltip'
                              className='hidden px-2 py-1 text-white bg-black rounded-lg text-sm'
                              role='tooltip'
                            >
                              Ryan Tompson
                              <div
                                className="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']"
                                data-popper-arrow
                              ></div>
                            </div>
                            <a
                              href='#/'
                              className='relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-4 text-white transition-all duration-200 border-2 border-white border-solid rounded-full ease-soft-in-out text-xs hover:z-30'
                              data-target='tooltip_trigger'
                              data-placement='bottom'
                            >
                              <img
                                src='../assets/img/team-3.jpg'
                                className='w-full rounded-full'
                                alt='user2'
                              />
                            </a>
                            <div
                              data-target='tooltip'
                              className='hidden px-2 py-1 text-white bg-black rounded-lg text-sm'
                              role='tooltip'
                            >
                              Romina Hadid
                              <div
                                className="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']"
                                data-popper-arrow
                              ></div>
                            </div>
                            <a
                              href='#/'
                              className='relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-4 text-white transition-all duration-200 border-2 border-white border-solid rounded-full ease-soft-in-out text-xs hover:z-30'
                              data-target='tooltip_trigger'
                              data-placement='bottom'
                            >
                              <img
                                src='../assets/img/team-4.jpg'
                                className='w-full rounded-full'
                                alt='user3'
                              />
                            </a>
                            <div
                              data-target='tooltip'
                              className='hidden px-2 py-1 text-white bg-black rounded-lg text-sm'
                              role='tooltip'
                            >
                              Alexander Smith
                              <div
                                className="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']"
                                data-popper-arrow
                              ></div>
                            </div>
                            <a
                              href='#/'
                              className='relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-4 text-white transition-all duration-200 border-2 border-white border-solid rounded-full ease-soft-in-out text-xs hover:z-30'
                              data-target='tooltip_trigger'
                              data-placement='bottom'
                            >
                              <img
                                src='../assets/img/team-1.jpg'
                                className='w-full rounded-full'
                                alt='user4'
                              />
                            </a>
                            <div
                              data-target='tooltip'
                              className='hidden px-2 py-1 text-white bg-black rounded-lg text-sm'
                              role='tooltip'
                            >
                              Jessica Doe
                              <div
                                className="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']"
                                data-popper-arrow
                              ></div>
                            </div>
                          </div>
                        </td>
                        <td className='p-2 leading-normal text-center align-middle bg-transparent border-b text-sm whitespace-nowrap'>
                          <span className='font-semibold leading-tight text-xs'> $20,500 </span>
                        </td>
                        <td className='p-2 align-middle bg-transparent border-b whitespace-nowrap'>
                          <div className='w-3/4 mx-auto'>
                            <div>
                              <div>
                                <span className='font-semibold leading-tight text-xs'>100%</span>
                              </div>
                            </div>
                            <div className='text-xs h-0.75 w-30 m-0 flex overflow-visible rounded-lg bg-gray-200'>
                              <div
                                className='duration-600 ease-soft bg-gradient-to-tl from-green-600 to-lime-400 -mt-0.38 -ml-px flex h-1.5 w-full flex-col justify-center overflow-hidden whitespace-nowrap rounded bg-fuchsia-500 text-center text-white transition-all'
                                role='progressbar'
                                aria-valuenow='100'
                                aria-valuemin='0'
                                aria-valuemax='100'
                              ></div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className='p-2 align-middle bg-transparent border-b whitespace-nowrap'>
                          <div className='flex px-2 py-1'>
                            <div>
                              <img
                                src='../assets/img/small-logos/logo-jira.svg'
                                className='inline-flex items-center justify-center mr-4 text-white transition-all duration-200 ease-soft-in-out text-sm h-9 w-9 rounded-xl'
                                alt='jira'
                              />
                            </div>
                            <div className='flex flex-col justify-center'>
                              <h6 className='mb-0 leading-normal text-sm'>Add the New Pricing Page</h6>
                            </div>
                          </div>
                        </td>
                        <td className='p-2 align-middle bg-transparent border-b whitespace-nowrap'>
                          <div className='mt-2 avatar-group'>
                            <a
                              href='#/'
                              className='relative z-20 inline-flex items-center justify-center w-6 h-6 text-white transition-all duration-200 border-2 border-white border-solid rounded-full ease-soft-in-out text-xs hover:z-30'
                              data-target='tooltip_trigger'
                              data-placement='bottom'
                            >
                              <img
                                src='../assets/img/team-4.jpg'
                                className='w-full rounded-full'
                                alt='user5'
                              />
                            </a>
                            <div
                              data-target='tooltip'
                              className='hidden px-2 py-1 text-white bg-black rounded-lg text-sm'
                              role='tooltip'
                            >
                              Ryan Tompson
                              <div
                                className="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']"
                                data-popper-arrow
                              ></div>
                            </div>
                          </div>
                        </td>
                        <td className='p-2 leading-normal text-center align-middle bg-transparent border-b text-sm whitespace-nowrap'>
                          <span className='font-semibold leading-tight text-xs'> $500 </span>
                        </td>
                        <td className='p-2 align-middle bg-transparent border-b whitespace-nowrap'>
                          <div className='w-3/4 mx-auto'>
                            <div>
                              <div>
                                <span className='font-semibold leading-tight text-xs'>25%</span>
                              </div>
                            </div>
                            <div className='text-xs h-0.75 w-30 m-0 flex overflow-visible rounded-lg bg-gray-200'>
                              <div
                                className='duration-600 ease-soft bg-gradient-to-tl from-blue-600 to-cyan-400 -mt-0.38 -ml-px flex h-1.5 w-1/4 flex-col justify-center overflow-hidden whitespace-nowrap rounded bg-fuchsia-500 text-center text-white transition-all'
                                role='progressbar'
                                aria-valuenow='25'
                                aria-valuemin='0'
                                aria-valuemax='25'
                              ></div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className='p-2 align-middle bg-transparent border-0 whitespace-nowrap'>
                          <div className='flex px-2 py-1'>
                            <div>
                              <img
                                src='../assets/img/small-logos/logo-invision.svg'
                                className='inline-flex items-center justify-center mr-4 text-white transition-all duration-200 ease-soft-in-out text-sm h-9 w-9 rounded-xl'
                                alt='invision'
                              />
                            </div>
                            <div className='flex flex-col justify-center'>
                              <h6 className='mb-0 leading-normal text-sm'>Redesign New Online Shop</h6>
                            </div>
                          </div>
                        </td>
                        <td className='p-2 align-middle bg-transparent border-0 whitespace-nowrap'>
                          <div className='mt-2 avatar-group'>
                            <a
                              href='#/'
                              className='relative z-20 inline-flex items-center justify-center w-6 h-6 text-white transition-all duration-200 border-2 border-white border-solid rounded-full ease-soft-in-out text-xs hover:z-30'
                              data-target='tooltip_trigger'
                              data-placement='bottom'
                            >
                              <img
                                src='../assets/img/team-1.jpg'
                                className='w-full rounded-full'
                                alt='user6'
                              />
                            </a>
                            <div
                              data-target='tooltip'
                              className='hidden px-2 py-1 text-white bg-black rounded-lg text-sm'
                              role='tooltip'
                            >
                              Ryan Tompson
                              <div
                                className="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']"
                                data-popper-arrow
                              ></div>
                            </div>
                            <a
                              href='#/'
                              className='relative z-20 inline-flex items-center justify-center w-6 h-6 -ml-4 text-white transition-all duration-200 border-2 border-white border-solid rounded-full ease-soft-in-out text-xs hover:z-30'
                              data-target='tooltip_trigger'
                              data-placement='bottom'
                            >
                              <img
                                src='../assets/img/team-4.jpg'
                                className='w-full rounded-full'
                                alt='user7'
                              />
                            </a>
                            <div
                              data-target='tooltip'
                              className='hidden px-2 py-1 text-white bg-black rounded-lg text-sm'
                              role='tooltip'
                            >
                              Jessica Doe
                              <div
                                className="invisible absolute h-2 w-2 bg-inherit before:visible before:absolute before:h-2 before:w-2 before:rotate-45 before:bg-inherit before:content-['']"
                                data-popper-arrow
                              ></div>
                            </div>
                          </div>
                        </td>
                        <td className='p-2 leading-normal text-center align-middle bg-transparent border-0 text-sm whitespace-nowrap'>
                          <span className='font-semibold leading-tight text-xs'> $2,000 </span>
                        </td>
                        <td className='p-2 align-middle bg-transparent border-0 whitespace-nowrap'>
                          <div className='w-3/4 mx-auto'>
                            <div>
                              <div>
                                <span className='font-semibold leading-tight text-xs'>40%</span>
                              </div>
                            </div>
                            <div className='text-xs h-0.75 w-30 m-0 flex overflow-visible rounded-lg bg-gray-200'>
                              <div
                                className='duration-600 ease-soft bg-gradient-to-tl from-blue-600 to-cyan-400 -mt-0.38 -ml-px flex h-1.5 w-2/5 flex-col justify-center overflow-hidden whitespace-nowrap rounded bg-fuchsia-500 text-center text-white transition-all'
                                role='progressbar'
                                aria-valuenow='40'
                                aria-valuemin='0'
                                aria-valuemax='40'
                              ></div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupervisorDashboard;
